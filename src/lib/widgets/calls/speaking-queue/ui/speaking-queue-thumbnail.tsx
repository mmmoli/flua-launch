import { usePeer } from '@entities/call';
import { Participant } from '@entities/speaking-queue';
import { Card, CardHeader, CardTitle } from '@ui/card';
import { FC } from 'react';

export interface SpeakingQueueThumbnailProps {
  participant: Participant;
}

export const SpeakingQueueThumbnail: FC<SpeakingQueueThumbnailProps> = ({
  participant: { id },
}) => {
  const peer = usePeer({ peerID: id });
  if (!peer) return null;
  return (
    <Card className='max-w-24'>
      <CardHeader>
        <CardTitle className='truncate text-center text-xs'>{peer.name}</CardTitle>
      </CardHeader>
    </Card>
  );
};
