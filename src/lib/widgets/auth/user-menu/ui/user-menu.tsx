import { SignInButton } from '@features/auth/sign-in-button';
import { auth } from '@shared/services/auth';
import { FC } from 'react';

import { SignedInUserMenu } from './signed-in-user-menu';

export const UserMenu: FC = async () => {
  const session = await auth();
  const user = session?.user;
  if (!!user) return <SignedInUserMenu user={user} />;
  return <SignInButton />;
};
