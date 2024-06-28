import { CallEntity } from '@entities/call';
import { RoomEntity, RoomModelSlug } from '@entities/room';
import { WaitingAreaWidget } from '@widgets/rooms/waiting-area';
import { FC } from 'react';

export interface RoomPageProps {
  params: { slug: RoomModelSlug };
}

export const RoomPage: FC<RoomPageProps> = async ({ params }) => {
  return (
    <RoomEntity slug={params.slug}>
      {(room) => (
        <CallEntity>
          <WaitingAreaWidget room={room} />
        </CallEntity>
      )}
    </RoomEntity>
  );
};
