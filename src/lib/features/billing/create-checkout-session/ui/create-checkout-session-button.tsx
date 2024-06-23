'use client';

import { Button, ButtonProps } from '@ui/button';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';

import { createCheckoutAction } from '../api/create-checkout-session-action';

export type CreateCheckoutSessionButton = ButtonProps & {
  priceId: string;
};

export const CreateCheckoutSessionButton: FC<CreateCheckoutSessionButton> = ({
  children = 'Buy Now',
  priceId,
  size = 'lg',
  ...props
}) => {
  const { pending } = useFormStatus();

  return (
    <form action={createCheckoutAction}>
      <input type='hidden' name='priceId' value={priceId} />
      <Button {...props} type='submit' disabled={pending}>
        {children}
      </Button>
    </form>
  );
};
