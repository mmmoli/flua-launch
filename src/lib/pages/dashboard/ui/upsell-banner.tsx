import { CreateCheckoutSessionButton } from '@features/billing/create-checkout-session';
import { WithoutActiveSubscription } from '@features/billing/pay-wall';
import { Alert, AlertDescription, AlertTitle } from '@ui/alert';
import { Terminal } from 'lucide-react';
import { FC } from 'react';

export const UpsellBanner: FC = () => {
  return (
    <WithoutActiveSubscription>
      <Alert className='border border-primary shadow-sm'>
        <Terminal className='h-5 w-5' />
        <div className='items-center justify-between md:flex'>
          <div>
            <AlertTitle className='text-xl'>Hey Freebie!</AlertTitle>
            <AlertDescription className='text-lg'>
              What you still doing on the free plan? 🤔
              <br />
              Upgrading gets you <strong>unlimited Rooms</strong>,{` `}
              <strong>Room Tiers</strong>,{` `}
              <strong>Stats</strong> and more.
            </AlertDescription>
          </div>
          <div className='mr-4 mt-4 md:mt-0'>
            <CreateCheckoutSessionButton>Upgrade Now</CreateCheckoutSessionButton>
          </div>
        </div>
      </Alert>
    </WithoutActiveSubscription>
  );
};
