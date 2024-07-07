import { FreeRoomCard } from '@widgets/rooms/free-room-card';
import { FC } from 'react';

export const DashboardPage: FC = async () => {
  return (
    <main className='flex h-full items-center justify-center'>
      <FreeRoomCard />
    </main>
  );
};
