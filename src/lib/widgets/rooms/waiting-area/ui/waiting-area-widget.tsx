'use client';

import { useJoinCall } from '@entities/call';
import { RoomModel } from '@entities/room';
import { Button } from '@ui/button';
import { FC, useCallback } from 'react';

export interface WaitingAreaWidgetProps {
  room: RoomModel;
}

const user = {
  id: '1',
  name: 'John Doe',
  avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
};

export const WaitingAreaWidget: FC<WaitingAreaWidgetProps> = ({ room }) => {
  const join = useJoinCall();

  const handleClick = useCallback(() => {
    join(user);
  }, [join]);

  return (
    <div>
      Waiting Room: {room.name}
      <Button onClick={handleClick}>Enter</Button>
    </div>
  );
};
