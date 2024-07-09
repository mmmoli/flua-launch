'use client';

import { useLocalPeer } from '@entities/call';
import { RoomModel } from '@entities/room';
import { Person, useSpeakingQueue, useSpeakingQueueStore } from '@entities/speaking-queue';
import { IsSpeakerBadge } from '@features/speaking-queue/is-speaker-badge';
import { JoinSpeakingQueueButton } from '@features/speaking-queue/join-speaking-queue-button';
import { LeaveSpeakingQueueButton } from '@features/speaking-queue/leave-speaking-queue-button';
import { SpeakerPositionBadge } from '@features/speaking-queue/speaker-position-badge';
import { ToggleAV } from '@features/speaking-queue/toggle-av/ui/toggle-av';
import { FC, useEffect } from 'react';

import { PeerList } from '../../peer-list';

export interface LiveCallWidgetProps {
  room: RoomModel;
}

export const LiveCallWidget: FC<LiveCallWidgetProps> = ({ room }) => {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useSpeakingQueueStore();
  const videoUser = useLocalPeer();

  useEffect(() => {
    enterRoom(room.id);
    return () => {
      leaveRoom();
    };
  }, [enterRoom, leaveRoom, room.id]);

  if (!videoUser) return null;
  const person: Person = {
    id: videoUser.id,
  };

  return (
    <>
      <ToggleAV user={person} />
      <IsSpeakerBadge user={videoUser} />
      <PeerList />
      <div className='flex gap-2 border p-2'>
        <JoinSpeakingQueueButton size='sm' user={person} />
        <LeaveSpeakingQueueButton size='sm' variant='ghost' user={person} />
      </div>
      <SpeakerPositionBadge user={person} />
    </>
  );
};
