import { CreateCheckoutSessionButton } from '@features/billing/create-checkout-session';
import { FC, ReactNode } from 'react';

export const HeroSection: FC = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-center gap-4 p-6 md:grid-cols-2 lg:p-20'>
      <div>
        <h1 className='text-6xl font-bold tracking-tight md:text-7xl'>
          {/* What is the value? */}
          Video Calls without the d*ckheads
        </h1>
        <p className='mt-6 pr-20 text-2xl leading-8 text-foreground/60'>
          {/* How value is created */}
          With <strong>Speaking Queues</strong> everyone gets their chance to talk.
        </p>
        <div className='mt-8 flex items-center gap-4'>
          {/* What to do next */}
          <CreateCheckoutSessionButton size='xl' priceId='price_1NxEzFDmsaCawsACwYCuiOBp' />
          <p className='max-w-80 font-bold text-primary'>People everywhere love this.</p>
        </div>
      </div>
      <div className='bg-red-200'>hero Image</div>
    </div>
  );
};
