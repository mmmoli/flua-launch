'use client';

import { RoomModel } from '@entities/room';
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
import { MoreHorizontal } from 'lucide-react';
import { FC } from 'react';

export interface RoomListCardRowProps {
  room: RoomModel;
}

export const RoomListCardRow: FC<RoomListCardRowProps> = ({ room: { name, createdAt } }) => {
  return (
    <TableRow>
      <TableCell className='font-medium'>{name}</TableCell>
      <TableCell>
        <Badge variant='outline'>Draft</Badge>
      </TableCell>
      <TableCell className='hidden md:table-cell'>$499.99</TableCell>
      <TableCell className='hidden md:table-cell'>25</TableCell>
      <TableCell className='hidden md:table-cell'>{createdAt.toString()}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup='true' size='icon' variant='ghost'>
              <MoreHorizontal className='h-4 w-4' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
