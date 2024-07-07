import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@ui/table';
import { FC } from 'react';

import { getRoomsForUser } from '../api/get-rooms';
import { RoomListCardRow } from './room-list-card-row';
import { RoomListEmpty } from './room-list-empty';

export interface RoomListCardProps {
  userId: string;
}

export const RoomListCard: FC<RoomListCardProps> = async ({ userId }) => {
  const roomsResult = await getRoomsForUser({
    ownerId: userId,
    orderBy: 'name',
  });

  if (roomsResult.isFail()) return <div>Failed to load rooms</div>;
  const rooms = roomsResult.value()!;

  if (rooms.length === 0) return <RoomListEmpty userId={userId} />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Rooms</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Entry Code</TableHead>
              <TableHead className='hidden md:table-cell'>Created at</TableHead>
              <TableHead>
                <span className='sr-only'>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <RoomListCardRow userId={userId} key={room.id} room={room} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className='text-xs text-muted-foreground'>
          Showing <strong>1-{rooms.length}</strong> Rooms
        </div>
      </CardFooter>
    </Card>
  );
};
