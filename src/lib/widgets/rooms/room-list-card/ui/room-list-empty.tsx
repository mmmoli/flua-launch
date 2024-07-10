import { OpenRoomDialog } from '@features/rooms/open-room';
import { assertUser } from '@shared/services/auth/api';
import { FC } from 'react';

export interface RoomListBannerProps {
  userId: string;
}

export const RoomListEmpty: FC<RoomListBannerProps> = async ({ userId }) => {
  return (
    <div className='flex items-center justify-center rounded-lg bg-accent/40 py-8'>
      <div className='text-center'>
        <h1>Flua ain&apos;t much fun with Rooms.</h1>
        <OpenRoomDialog userId={userId} variant='link' className='text-md px-0'>
          Open a Room
        </OpenRoomDialog>
        {` `} to get started.
      </div>
    </div>
  );
};
