'use client';

import { env } from '@shared/config/env';
import { Card, CardContent } from '@ui/card';
import { FC } from 'react';

export interface PlanCardProps {
  buttonId: string;
  user?: {
    email: string;
    id: string;
  };
  stripePublisableKey?: string;
}

export const PlanCard: FC<PlanCardProps> = ({
  buttonId,
  user,
  stripePublisableKey = env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
}) => {
  const extraAttributes = user
    ? {
        'customer-email': user.email,
        // 'client-reference-id': user.id,
      }
    : {};
  return (
    <stripe-buy-button
      key={buttonId}
      buy-button-id={buttonId}
      publishable-key={stripePublisableKey}
      {...extraAttributes}
    />
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': any;
    }
  }
}
