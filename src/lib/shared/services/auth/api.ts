'use server';

import { SignInPageRoute } from '@shared/config/routes';
import { auth } from '@shared/services/auth';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export type OnFailFunc = (destinationUrl: string) => never;

export interface AssertUserOpts {
  next?: string;
  onFail?: OnFailFunc;
  redirectTo?: string;
}

export const assertUser = cache(async (opts?: AssertUserOpts) => {
  const onFail = opts?.onFail ?? redirect;
  const redirectTo = opts?.redirectTo ?? SignInPageRoute({ next: opts?.next }).url;
  const session = await auth();
  if (!session) onFail(redirectTo);
  return session;
});
