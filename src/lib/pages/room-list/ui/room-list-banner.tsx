import { OpenRoomDialog } from '@features/rooms/open-room';
import { assertUser } from '@shared/services/auth/api';
import { FC } from 'react';

export interface RoomListBannerProps {
  userId: string;
}

export const RoomListBanner: FC<RoomListBannerProps> = async ({ userId }) => {
  return (
    <div className='flex items-baseline justify-end'>
      <OpenRoomDialog userId={userId} />
    </div>
  );
};
