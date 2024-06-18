'use client';

import { signOut, SignOutParams } from '@shared/services/auth/client';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export type SignOutButtonProps = ButtonProps & {
  signOutParams?: SignOutParams;
};

export const SignOutButton: FC<SignOutButtonProps> = ({
  children = 'Sign Out',
  variant = 'ghost',
  signOutParams,
  ...props
}) => {
  const handleClick = useCallback(() => {
    signOut(signOutParams);
  }, [signOutParams]);

  return (
    <Button variant={variant} {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};
