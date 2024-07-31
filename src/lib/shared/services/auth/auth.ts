import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { BASE_URL } from '@shared/config/constants';
import { env } from '@shared/config/env';
import { DashPage, SetupPage, SignInPageRoute } from '@shared/config/routes';
import { db, preparedSubscriptionStatus, schema } from '@shared/services/db';
import { publish } from '@shared/services/events';
import { logger } from '@shared/services/logger';
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
      await publish({
        url: new URL('/api/events/on-user-created', BASE_URL),
        body: {
          user: {
            id: user.id!,
            email: user.email!,
            avatarUrl: user.image!,
          },
        },
      });
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
