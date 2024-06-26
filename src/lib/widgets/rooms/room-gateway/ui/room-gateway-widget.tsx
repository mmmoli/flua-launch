'use client';

import { RoomModel } from '@entities/room';
import { LiveCallWidget } from '@widgets/rooms/live-call';
import { WaitingAreaWidget } from '@widgets/rooms/waiting-area';
import { FC, useCallback, useState } from 'react';

export const RoomGatewayWidget: FC<{ room: RoomModel }> = ({ room }) => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = useCallback(() => {
    setHasEntered(true);
  }, []);

  return hasEntered ? (
    <LiveCallWidget room={room} />
  ) : (
    <WaitingAreaWidget room={room} onEnterCallback={handleEnter} />
  );
};
