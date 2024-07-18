'use client';

import { FC, ReactNode, useContext } from 'react';

import { PayWall } from './pay-wall';
import { WhenSubscriptionNotActive } from './when-subscription-not-inactive';

export const WithoutActiveSubscription: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PayWall>
      <WhenSubscriptionNotActive>{children}</WhenSubscriptionNotActive>
    </PayWall>
  );
};
