import { Button } from '@ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { routes } from '@/lib/shared/config/routes';

export const metadata: Metadata = {
  title: 'Decent Next.js Starter Template',
  description: 'Quickly start a new Next.js project with common tools and configurations.',
};

export const PublicHomePage: FC = () => {
  return (
    <div className='relative isolate px-6 pt-8 lg:px-8'>
      <div className='sm:py-18 mx-auto max-w-2xl py-24 lg:py-20'>
        <div className='text-center'>
          <h1 className='text-7xl font-bold tracking-tight text-gray-900 sm:text-7xl md:text-9xl'>
            Video Calls
            <br /> without the
            <br /> d*ckheads
          </h1>
          <p className='mt-6 text-3xl leading-8 text-gray-600'>
            Everyone gets to speak. No interruptions.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-2'>
            <Button asChild size='lg'>
              <Link href={routes.WaitinglistPage(null).url}>Get BETA access</Link>
            </Button>
            <Button asChild variant='link' size='lg'>
              <Link href={routes.AboutPage(null).url}>
                Learn more
                <span aria-hidden='true'>→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
