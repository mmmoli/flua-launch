import { DashPage } from '@shared/config/routes';
import { signIn } from '@shared/services/auth';
import { Button, ButtonProps } from '@ui/button';
import { FC } from 'react';

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
  return (
    <form
      action={async () => {
        'use server';
        await signIn(network);
      }}
    >
      <Button {...props} type='submit'>
        {children}
      </Button>
    </form>
  );
};
