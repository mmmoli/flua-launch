import { RoomEntity, RoomModelSlug, RoomName } from '@entities/room';
import { Button } from '@ui/button';
import { FC, useCallback } from 'react';

export interface WaitingRoomPageProps {
  roomSlug: RoomModelSlug;
  enterCallback?: () => void;
}

export const WaitingRoomPage: FC<WaitingRoomPageProps> = async ({
  enterCallback = () => {},
  roomSlug,
}) => {
  const handleEnter = useCallback(() => {
    enterCallback();
  }, [enterCallback]);

  return (
    <RoomEntity slug={roomSlug}>
      {(_room) => (
        <>
          <hgroup>
            <h1>
              <RoomName />
            </h1>
            <h2>Waiting Area</h2>
          </hgroup>
          <Button onClick={handleEnter}>Enter</Button>
        </>
      )}
    </RoomEntity>
  );
};
