import { DashPage } from '@shared/config/routes';
import { assertUser } from '@shared/services/auth/api';
import { PlanSelection } from '@widgets/billing/plan-selection';
import { Metadata } from 'next';
import Script from 'next/script';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Setup',
};

export const SetupPage: FC = async () => {
  const session = await assertUser({ next: DashPage().url });
  if (!session) return null;
  return (
    <>
      <div className='flex min-h-screen items-center justify-center bg-muted'>
        <PlanSelection />
      </div>
      <Script async src='https://js.stripe.com/v3/buy-button.js' />
    </>
  );
};
