'use client';

import { DashPage } from '@shared/config/routes';
import { signIn } from '@shared/services/auth/client';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface SignInButtonProps extends ButtonProps {
  network?: 'google';
  callbackUrl?: string;
}

export const SignInButton: FC<SignInButtonProps> = ({
  children = 'Sign In (Google)',
  network = 'google',
  callbackUrl = DashPage(null).url,
  ...props
}) => {
  const handleClick = useCallback(() => {
    signIn(network, {
      callbackUrl,
      redirect: true,
    });
  }, [network, callbackUrl]);

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};
