import { assertUser } from '@features/auth/assert-user';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { FC } from 'react';

import { getRoomsForUser } from '../api/get-rooms';
import { RoomItem } from './room-item';
import { RoomListEmpty } from './room-list-empty';

export interface RoomListProps {}

export const RoomList: FC<RoomListProps> = async () => {
  const session = await assertUser();
  const rooms = await getRoomsForUser({
    ownerId: session?.user?.id!,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Rooms</CardTitle>
      </CardHeader>
      <CardContent>
        {rooms.length > 0 ? (
          <ol className='flex flex-wrap gap-1'>
            {rooms.map((room) => (
              <li key={room.id} className='inline-block'>
                <RoomItem {...room} />
              </li>
            ))}
          </ol>
        ) : (
          <RoomListEmpty />
        )}
      </CardContent>
    </Card>
  );
};
