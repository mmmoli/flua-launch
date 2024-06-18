import { RoomEntity, RoomModelSlug } from '@entities/room';
import { FC } from 'react';

export interface LiveCallPageProps {
  roomSlug: RoomModelSlug;
}

export const LiveCallPage: FC<LiveCallPageProps> = ({ roomSlug }) => {
  return (
    <RoomEntity slug={roomSlug}>
      {(room) => (
        <>
          <hgroup>
            <h1>{room.name}</h1>
            <h2>Live Call</h2>
          </hgroup>
        </>
      )}
    </RoomEntity>
  );
};
