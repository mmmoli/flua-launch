'use server';

import { SetupPage } from '@shared/config/routes';
import { assertUser } from '@shared/services/auth/api';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export interface AssertBillingOpts {
  redirectTo?: string;
}

export const assertBilling = cache(async (opts?: AssertBillingOpts) => {
  const redirectTo = opts?.redirectTo ?? SetupPage().url;
  const session = await assertUser();
  const isActive = session?.user.hasActiveSubscription ?? false;
  if (!isActive) redirect(redirectTo);
});
