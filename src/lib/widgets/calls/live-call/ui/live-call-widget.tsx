'use client';

import { useLocalPeer } from '@entities/call';
import { RoomModel } from '@entities/room';
import { Person, useSpeakingQueue, useSpeakingQueueStore } from '@entities/speaking-queue';
import { IsSpeakerBadge } from '@features/speaking-queue/is-speaker-badge';
import { SpeakerPositionBadge } from '@features/speaking-queue/speaker-position-badge';
import { ToggleAV } from '@features/speaking-queue/toggle-av/ui/toggle-av';
import { ToggleJoinSpeakingQueueButton } from '@features/speaking-queue/toggle-join-speaking-queue-button';
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
      <SpeakerPositionBadge
        user={person}
        className='mb-px block rounded-none py-4 text-center text-lg font-bold'
      />
      <IsSpeakerBadge
        user={videoUser}
        className='mb-px block rounded-none py-4 text-center text-lg font-bold'
      />
      <PeerList />
      <div className='bottom absolute bottom-10 left-1/2 z-10 -translate-x-1/2 transform text-center'>
        <ToggleJoinSpeakingQueueButton size='xl' user={person} className='shadow-md' />
      </div>
      <ToggleAV user={person} />
    </>
  );
};
