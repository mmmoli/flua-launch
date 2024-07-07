'use client';

import { RoomModel } from '@entities/room';
import { UserId } from '@shared/services/auth/client';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { TableCell, TableRow } from '@ui/table';
import { formatDistanceToNow } from 'date-fns';
import { MoreHorizontal } from 'lucide-react';
import { FC } from 'react';

import { RoomListCardRowMenu } from './room-list-card-row-menu';

export interface RoomListCardRowProps {
  room: RoomModel;
  userId: UserId;
}

export const RoomListCardRow: FC<RoomListCardRowProps> = ({ room, userId }) => {
  const since = formatDistanceToNow(new Date(room.createdAt));
  return (
    <TableRow>
      <TableCell className='font-medium'>{room.name}</TableCell>
      <TableCell>
        <Badge variant='outline'>{room.tier}</Badge>
      </TableCell>
      <TableCell className='font-mono text-xs'>{room.roomCode}</TableCell>
      <TableCell className='hidden md:table-cell'>{since}</TableCell>
      <TableCell>
        <RoomListCardRowMenu userId={userId} room={room} />
      </TableCell>
    </TableRow>
  );
};
