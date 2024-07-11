import { SignInButton } from '@features/auth/sign-in-button';
import { auth } from '@shared/services/auth';
import { FC, ReactNode } from 'react';

import { SignedInUserMenu } from './signed-in-user-menu';

export interface UserMenuProps {
  signedOutCta?: ReactNode;
}

export const UserMenu: FC<UserMenuProps> = async ({ signedOutCta }) => {
  const session = await auth();
  const user = session?.user;
  if (!!user) return <SignedInUserMenu user={user} />;
  return <SignInButton>{signedOutCta}</SignInButton>;
};
