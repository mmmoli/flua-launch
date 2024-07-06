'use client';

import { PeerList } from '@entities/call';
import { RoomModel } from '@entities/room';
import { useSpeakingQueue, useSpeakingQueueStore } from '@entities/speaking-queue';
import { IsSpeakerBadge } from '@features/speaking-queue/is-speaker-badge';
import { JoinSpeakingQueueButton } from '@features/speaking-queue/join-speaking-queue-button';
import { LeaveSpeakingQueueButton } from '@features/speaking-queue/leave-speaking-queue-button';
import { SpeakerPositionBadge } from '@features/speaking-queue/speaker-position-badge';
import { useSession } from '@shared/services/auth/client';
import { FC, useEffect } from 'react';

export interface LiveCallWidgetProps {
  room: RoomModel;
}

export const LiveCallWidget: FC<LiveCallWidgetProps> = ({ room }) => {
  const {
    liveblocks: { enterRoom, leaveRoom },
    queue,
  } = useSpeakingQueueStore();

  const { data } = useSession();
  const user = data?.user!;

  useEffect(() => {
    enterRoom(room.id);
    return () => {
      leaveRoom();
    };
  }, [enterRoom, leaveRoom, room.id]);

  return (
    <div>
      <h1>Live Call</h1>
      <p>Room: {room.name}</p>
      <PeerList />
      <div className='flex gap-2 border p-2'>
        <JoinSpeakingQueueButton user={user} />
        <LeaveSpeakingQueueButton user={user} />
      </div>
      <IsSpeakerBadge user={user} />
      <SpeakerPositionBadge user={user} />
      <pre>{JSON.stringify(queue, null, 2)}</pre>
    </div>
  );
};
