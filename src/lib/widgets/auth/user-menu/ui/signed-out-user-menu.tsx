'use client';

import { signIn } from '@shared/services/auth/client';
import { IconLoader2, IconUser } from '@tabler/icons-react';
import { Button } from '@ui/button';
import { FC, useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';

export const SignedOutUserMenu: FC = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const debouncedSetIsSigningIn = useDebounceCallback(setIsSigningIn, 500);

  const login = async () => {
    debouncedSetIsSigningIn(true);
    await signIn('google');
    setIsSigningIn(false);
  };

  return (
    <Button
      size='sm'
      variant='default'
      onClick={login}
      className='bg-blue-100 text-black hover:bg-blue-200'
    >
      {isSigningIn ? (
        <IconLoader2 className='mr-2 size-4 animate-spin sm:size-5' />
      ) : (
        <IconUser className='mr-2 size-4 sm:size-5' />
      )}
      Signin
    </Button>
  );
};
