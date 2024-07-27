import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { send } from '@emails/welcome-user';
import { OpenRoomUseCase } from '@features/rooms/open-room/model/open-room-use-case';
import { env } from '@shared/config/env';
import { DashPage, SetupPage, SignInPageRoute } from '@shared/config/routes';
import { trackEvent } from '@shared/services/analytics/node';
import { db, preparedSubscriptionStatus, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { roomService } from '@shared/services/video-conferencing/api';
import assert from 'assert';
import NextAuth, { type DefaultSession } from 'next-auth';
import Google from 'next-auth/providers/google';

import { isSubscriptionActive, isTrialing } from '../db/schema';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  debug: env.AUTH_DEBUG,
  adapter: DrizzleAdapter(db),
  session: { strategy: 'jwt' },
  pages: {
    newUser: SetupPage().url,
    signIn: SignInPageRoute({ next: DashPage().url }).url,
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;

      // Check if the user has an active subscription
      const query = await preparedSubscriptionStatus.execute({ userId: session.user.id });
      const { status } = query.pop() || {};
      const searchStatus = status ?? 'NOT_A_STATUS';
      session.user.hasActiveSubscription = isSubscriptionActive(searchStatus);
      session.user.isTrialing = isTrialing(searchStatus);
      return session;
    },
  },
  events: {
    signOut: async () => {
      logger.unidentify();
    },
    signIn: async ({ user }) => {
      logger.identify({ id: user.id, email: user.email || undefined });
    },
    createUser: async ({ user }) => {
      await trackEvent('user:created');

      if (!user.id) {
        logger.error(`Failed to create customer. No user Id`);
        return;
      }

      const emailResult = await send(user.email!);
      if (emailResult.isFail()) logger.error(emailResult.error());

      const useCase = new OpenRoomUseCase({
        db,
        roomService,
      });

      const result = await useCase.execute({
        name: 'My Free Room',
        ownerId: user.id,
        tier: 'FREE',
      });
      if (result.isFail()) logger.error(`Failed to create free room for user: ${result.error()}`);
    },
  },
  trustHost: true,
});

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      hasActiveSubscription: boolean;
      isTrialing: boolean;
    } & DefaultSession['user'];
  }
}
