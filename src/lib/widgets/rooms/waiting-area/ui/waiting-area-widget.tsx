'use client';

import { RoomModel } from '@entities/room';
import { Button } from '@ui/button';
import { FC, useCallback } from 'react';

export interface WaitingAreaWidgetProps {
  room: RoomModel;
  onEnterCallback: () => void;
}

export const WaitingAreaWidget: FC<WaitingAreaWidgetProps> = ({ room, onEnterCallback }) => {
  const handleClick = useCallback(() => {
    onEnterCallback();
  }, [onEnterCallback]);
  return (
    <div>
      Waiting Room: {room.name}
      <Button onClick={handleClick}>Enter</Button>
    </div>
  );
};
