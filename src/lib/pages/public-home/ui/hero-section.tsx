import { CreateCheckoutSessionButton } from '@features/billing/create-checkout-session';
import Image from 'next/image';
import { FC } from 'react';

import graphic from '../assets/flua-video-conference-call-graphic.svg';

export const HeroSection: FC = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-center gap-4 p-6 lg:grid-cols-2 lg:p-20'>
      <div>
        <h1 className='text-6xl font-bold tracking-tight md:text-7xl'>
          {/* What is the value? */}
          Video Calls without the d*ckheads
        </h1>
        <p className='mt-6 pr-20 text-2xl leading-8 text-foreground/60'>
          {/* How value is created */}
          Flua&apos;s <strong>Speaking Queues</strong> give everyone gets their chance to talk.
        </p>
        <div className='mt-8 flex items-center gap-4'>
          {/* What to do next */}
          <CreateCheckoutSessionButton size='xl' priceId='price_1NxEzFDmsaCawsACwYCuiOBp' />
          <p className='max-w-80 font-bold text-primary'>People everywhere love this.</p>
        </div>
      </div>

      <div className='py-8'>
        <Image
          priority
          src={graphic}
          alt='Flua Video Conference Call Graphic'
          className='relative h-auto'
        />
      </div>
    </div>
  );
};
