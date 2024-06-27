import { SignInButton } from '@features/auth/sign-in-button';
import { FC } from 'react';

export interface LastCtaSectionProps {}

export const LastCtaSection: FC<LastCtaSectionProps> = () => {
  return (
    <section>
      <div className='px-6 py-24 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-base font-semibold leading-7 text-primary'>Get the help you need</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-6xl'>
            No more
            <br /> big mouths on calls
          </h1>
          <div className='my-5'>
            <SignInButton size='lg' />
          </div>
        </div>
      </div>
    </section>
  );
};
