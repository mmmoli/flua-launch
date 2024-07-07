import { assertUser } from '@shared/services/auth/api';
import { Metadata } from 'next/types';
import { FC } from 'react';

import { RoomListCard } from '@/lib/widgets/rooms/room-list-card';

import { RoomListBanner } from './room-list-banner';

export const metadata: Metadata = {
  title: 'Room List',
};

export const RoomListPage: FC = async () => {
  const session = await assertUser();
  const user = session?.user;
  if (!user) return null;
  return (
    <div className='grid gap-2'>
      <RoomListBanner userId={user.id} />
      <RoomListCard userId={user.id} />
    </div>
  );
};
