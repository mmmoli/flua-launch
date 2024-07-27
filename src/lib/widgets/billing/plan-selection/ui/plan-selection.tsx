'use client';

import { env } from '@shared/config/env';
import { useSession } from '@shared/services/auth/client';
import { FC, useMemo, useState } from 'react';

import { BillingPeriodSwitch } from './billing-period-switch';
import { PlanCard } from './plan-card';

export const PlanSelection: FC = () => {
  const { data } = useSession();
  const maybeUser = data
    ? {
        email: data.user.email!,
        id: data.user.id!,
      }
    : undefined;
  const [annualBilling, setAnnualBilling] = useState(true);

  const handleBillingPeriodChange = (isAnnual: boolean) => {
    setAnnualBilling(isAnnual);
  };

  const buttonId = annualBilling
    ? env.NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID
    : env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID;

  return (
    <div className='flex flex-col justify-center gap-4'>
      <BillingPeriodSwitch annualBilling={annualBilling} onChange={handleBillingPeriodChange} />
      <div className='flex w-full max-w-2xl flex-col items-stretch justify-center gap-8 sm:flex-row md:items-center md:justify-around'>
        <PlanCard buttonId={buttonId} user={maybeUser} />
      </div>
    </div>
  );
};
