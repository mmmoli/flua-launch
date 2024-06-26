'use client';

import { useSpeakingQueue } from '@entities/call';
import { RoomModel } from '@entities/room';
import { JoinSpeakingQueueButton } from '@features/calls/join-speaking-queue-button';
import { LeaveSpeakingQueueButton } from '@features/calls/leave-speaking-queue-button';
import { LiveBadge } from '@features/calls/live-badge';
import { FC } from 'react';

export interface LiveCallWidgetProps {
  room: RoomModel;
}

const user = {
  id: '1',
  name: 'John Doe',
  avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
};

export const LiveCallWidget: FC<LiveCallWidgetProps> = ({ room }) => {
  const queue = useSpeakingQueue();

  return (
    <div>
      <h1>Live Call</h1>
      <p>Room: {room.name}</p>
      <div className='flex gap-2 border p-2'>
        <JoinSpeakingQueueButton user={user} />
        <LeaveSpeakingQueueButton user={user} />
      </div>
      <LiveBadge />
      <pre>{JSON.stringify(queue, null, 2)}</pre>
    </div>
  );
};
