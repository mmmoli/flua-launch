'use client';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { FC, useContext } from 'react';

import { Context } from '../lib/pay-wall-context';

export const WhenSubscriptionNotActive: FC<SlotProps> = ({ children, ...props }) => {
  const { hasActiveSubscription } = useContext(Context);
  if (hasActiveSubscription === undefined) return null;
  return hasActiveSubscription ? null : <Slot {...props}>{children}</Slot>;
};
