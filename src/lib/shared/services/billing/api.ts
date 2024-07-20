'use server';

import { SetupPage } from '@shared/config/routes';
import { assertUser } from '@shared/services/auth/api';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export interface AssertBillingOpts {}

export const assertBilling = cache(async (opts?: AssertBillingOpts) => {
  const session = await assertUser();
  const activeSubscription = session?.user.activeSubscription;
  if (!activeSubscription) redirect(SetupPage().url);
});
