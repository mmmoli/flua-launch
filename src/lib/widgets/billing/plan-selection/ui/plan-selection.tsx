import { CreateCheckoutSessionButton } from '@features/billing/create-checkout-session';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@ui/card';
import { FC } from 'react';

export const PlanSelection: FC = () => {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Plan Selection</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Plan Selection</p>
        <CreateCheckoutSessionButton>Pay Monthly</CreateCheckoutSessionButton>
      </CardContent>
      <CardFooter>
        <p className='text-sm'>Footer</p>
      </CardFooter>
    </Card>
  );
};
