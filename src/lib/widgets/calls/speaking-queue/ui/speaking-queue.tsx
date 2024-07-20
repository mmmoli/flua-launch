'use client';

import { useSpeakingQueue } from '@entities/speaking-queue';
import { FC } from 'react';

import { SpeakingQueueThumbnail } from './speaking-queue-thumbnail';

export const SpeakingQueueWidget: FC = () => {
  const queue = useSpeakingQueue();
  if (queue.length < 1) return null;
  return (
    <div className='flex gap-px bg-muted p-3'>
      {queue.map((participant) => (
        <SpeakingQueueThumbnail key={participant.id} participant={participant} />
      ))}
    </div>
  );
};
