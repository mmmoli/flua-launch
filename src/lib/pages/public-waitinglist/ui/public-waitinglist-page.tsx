import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Join Waitinglist – Flua',
  description: 'Generated by create next app',
};

export const PublicWaitinglistPage: FC = () => {
  return (
    <>
      <div className='prose-xl md:prose-xl prose-headings:font-bold'>
        <h1>Get notified when we launch</h1>
        <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8'>
          Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla
          et culpa.
        </p>
        <form className='mx-auto mt-10 flex max-w-md gap-x-4'>
          <Label htmlFor='email-address' className='sr-only'>
            Email address
          </Label>
          <Input
            id='email-address'
            name='email'
            type='email'
            autoComplete='email'
            required
            placeholder='Enter your email'
          />
          <Button type='submit' className='flex-none'>
            Notify me
          </Button>
        </form>
      </div>
    </>
  );
};
