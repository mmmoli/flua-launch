'use client';

import { RoomModel } from '@entities/room';
import { useSpeakingQueue } from '@entities/speaking-queue';
import { IsSpeakerBadge } from '@features/speaking-queue/is-speaker-badge';
import { JoinSpeakingQueueButton } from '@features/speaking-queue/join-speaking-queue-button';
import { LeaveSpeakingQueueButton } from '@features/speaking-queue/leave-speaking-queue-button';
import { FC, useEffect } from 'react';

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
      <IsSpeakerBadge />
      <pre>{JSON.stringify(queue, null, 2)}</pre>
    </div>
  );
};
