import { signOut } from '@shared/services/auth';
import { Button, ButtonProps } from '@ui/button';
import { FC } from 'react';

export type SignOutButtonProps = ButtonProps & {
  redirectTo?: string;
};

export const SignOutButton: FC<SignOutButtonProps> = ({
  children = 'Sign Out',
  variant = 'ghost',
  redirectTo,
  ...props
}) => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({
          redirectTo,
        });
      }}
    >
      <Button variant={variant} {...props} type='submit'>
        {children}
      </Button>
    </form>
  );
};
