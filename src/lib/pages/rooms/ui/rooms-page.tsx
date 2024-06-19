import { assertUser } from '@features/auth/assert-user';
import { RoomListCard } from '@widgets/rooms/room-list-card';
import { FC, Suspense } from 'react';

export const RoomsPage: FC = async () => {
  const session = await assertUser();
  const userId = session?.user?.id;

  if (!userId) return null;

  return (
    <Suspense fallback={<p>Loading Rooms…</p>}>
      <RoomListCard userId={userId} />
    </Suspense>
  );
};
