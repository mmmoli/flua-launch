import { CreateCheckoutSessionButton } from '@features/billing/create-checkout-session';
import { assertUser } from '@shared/services/auth/api';
import { FreeRoomCard } from '@widgets/rooms/free-room-card';
import { FC } from 'react';

import { PayWall, WithoutActiveSubscription } from '@/lib/features/billing/pay-wall';

export const DashboardPage: FC = async () => {
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <WithoutActiveSubscription>
        <CreateCheckoutSessionButton />
      </WithoutActiveSubscription>
      <FreeRoomCard />
    </main>
  );
};
