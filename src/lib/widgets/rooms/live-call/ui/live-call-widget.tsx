'use client';

import { RoomModel } from '@entities/room';
import { FC } from 'react';

export interface LiveCallWidgetProps {
  room: RoomModel;
}

export const LiveCallWidget: FC<LiveCallWidgetProps> = ({ room }) => {
  return (
    <div>
      <h1>Live Call</h1>
      <p>Room: {room.name}</p>
    </div>
  );
};
