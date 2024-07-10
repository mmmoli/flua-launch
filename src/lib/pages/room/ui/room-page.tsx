import { RoomEntity, RoomModelSlug } from '@entities/room';
import { WaitingAreaWidget } from '@widgets/rooms/waiting-area';
import dynamic from 'next/dynamic';
import { FC, Suspense } from 'react';

const CallEntity = dynamic(() => import('@entities/call').then((mod) => mod.CallEntity));

export interface RoomPageProps {
  params: { slug: RoomModelSlug };
}

export const RoomPage: FC<RoomPageProps> = async ({ params }) => {
  return (
    <RoomEntity slug={params.slug}>
      {(room) => (
        <Suspense>
          <CallEntity>
            <WaitingAreaWidget room={room} />
          </CallEntity>
        </Suspense>
      )}
    </RoomEntity>
  );
};
