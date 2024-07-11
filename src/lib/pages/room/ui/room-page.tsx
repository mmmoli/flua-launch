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
        <>
          <header className='absolute left-8 top-4'>
            <h1 className='text-md font-bold'>{room.name}</h1>
          </header>
          <Suspense>
            <CallEntity>
              <WaitingAreaWidget room={room} />
            </CallEntity>
          </Suspense>
        </>
      )}
    </RoomEntity>
  );
};
