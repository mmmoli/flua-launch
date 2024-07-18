'use client';

import { useSession } from '@shared/services/auth/client';
import { FC, ReactNode } from 'react';

import { Context } from '../lib/pay-wall-context';

export const PayWall: FC<{ children?: ReactNode }> = ({ children }) => {
  const { data } = useSession();
  const hasActiveSubscription = data?.user?.activeSubscription;
  return <Context.Provider value={{ hasActiveSubscription }}>{children}</Context.Provider>;
};
