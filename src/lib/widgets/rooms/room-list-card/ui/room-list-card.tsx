import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@ui/table';
import { FC } from 'react';

import { getRoomsForUser } from '../api/get-rooms';
import { RoomListCardRow } from './room-list-card-row';

export interface RoomListCardProps {
  userId: string;
}

export const RoomListCard: FC<RoomListCardProps> = async ({ userId }) => {
  const roomsResult = await getRoomsForUser({
    ownerId: userId,
  });

  if (roomsResult.isFail()) return <div>Failed to load rooms</div>;
  const rooms = roomsResult.value()!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rooms</CardTitle>
        <CardDescription>Manage your products and view their sales performance.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='hidden md:table-cell'>Price</TableHead>
              <TableHead className='hidden md:table-cell'>Total Sales</TableHead>
              <TableHead className='hidden md:table-cell'>Created at</TableHead>
              <TableHead>
                <span className='sr-only'>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.map((room) => (
              <RoomListCardRow key={room.id} room={room} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className='text-xs text-muted-foreground'>
          Showing <strong>1-10</strong> of <strong>{rooms.length}</strong> Rooms
        </div>
      </CardFooter>
    </Card>
  );
};
