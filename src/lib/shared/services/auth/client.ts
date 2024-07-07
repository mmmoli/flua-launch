export { getSession, SessionProvider, signIn, signOut, useSession } from 'next-auth/react';

import { User } from 'next-auth';
import { SignInOptions, SignOutParams } from 'next-auth/react';
export type { SignInOptions, SignOutParams, User };

export type UserId = NonNullable<User['id']>;
