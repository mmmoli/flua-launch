'use client';

import { RoomModel } from '@entities/room';
import { CloseRoomDialog } from '@features/rooms/close-room';
import { UserId } from '@shared/services/auth/client';
import { Button } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { ComponentPropsWithoutRef, FC, useState } from 'react';

export interface RoomListCardRowMenuProps {
  room: RoomModel;
  userId: UserId;
}

export interface OpenedMenuState {
  menu: boolean;
  close: boolean;
}

export const RoomListCardRowMenu: FC<
  ComponentPropsWithoutRef<'div'> & RoomListCardRowMenuProps
> = ({ className, room, userId }) => {
  const [menuState, setMenuState] = useState<OpenedMenuState>({
    menu: false,
    close: false,
  });

  return (
    <>
      <DropdownMenu
        open={menuState.menu}
        onOpenChange={() => setMenuState((s) => ({ ...s, menu: !s.menu }))}
      >
        <DropdownMenuTrigger asChild className={className}>
          <Button aria-haspopup='true' size='icon' variant='ghost'>
            <MoreHorizontal className='h-4 w-4' />
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='left'>
          <DropdownMenuLabel>{room.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMenuState((s) => ({ ...s, close: true, menu: false }));
            }}
            className='cursor-pointer'
          >
            Close
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CloseRoomDialog
        roomId={room.id}
        userId={userId}
        open={menuState.close}
        onOpenChange={(o) => setMenuState((s) => ({ ...s, close: o }))}
        onClose={() => setMenuState((s) => ({ ...s, close: false }))}
      />
    </>
  );
};
