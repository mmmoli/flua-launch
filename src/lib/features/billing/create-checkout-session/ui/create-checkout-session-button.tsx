'use client';

import { env } from '@shared/config/env';
import { Button, ButtonProps } from '@ui/button';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';

import { createCheckoutAction } from '../api/create-checkout-session-action';

export type CreateCheckoutSessionButton = ButtonProps & {
  priceId?: string;
};

export const CreateCheckoutSessionButton: FC<CreateCheckoutSessionButton> = ({
  children = 'Buy Now',
  priceId = env.NEXT_PUBLIC_STRIPE_PRICE_ID,
  size = 'lg',
  ...props
}) => {
  const { pending } = useFormStatus();

  return (
    <form action={createCheckoutAction}>
      <input type='hidden' name='priceId' value={priceId} />
      <Button {...props} size={size} type='submit' disabled={pending}>
        {children}
      </Button>
    </form>
  );
};
