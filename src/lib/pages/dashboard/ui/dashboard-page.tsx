import { FreeRoomCard } from '@widgets/rooms/free-room-card';
import { FC } from 'react';

import { UpsellBanner } from './upsell-banner';

export const DashboardPage: FC = async () => {
  return (
    <main className='flex h-full flex-col items-center justify-center gap-4'>
      <UpsellBanner />
      <FreeRoomCard />
    </main>
  );
};
