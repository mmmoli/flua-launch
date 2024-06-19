import { assertUser } from '@features/auth/assert-user';
import { RoomListCard } from '@widgets/rooms/room-list-card';
import { FC } from 'react';

export const RoomsPage: FC = async () => {
  const session = await assertUser();
  const userId = session?.user?.id;

  if (!userId) return null;

  return <RoomListCard userId={userId} />;
};
