import { OpenRoomDialog } from '@features/rooms/open-room';
import { FC } from 'react';

export interface RoomListBannerProps {
  userId: string;
}

export const RoomListBanner: FC<RoomListBannerProps> = async ({ userId }) => {
  return (
    <div className='flex items-baseline'>
      <OpenRoomDialog userId={userId} />
    </div>
  );
};
