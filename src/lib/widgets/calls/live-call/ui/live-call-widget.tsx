'use client';

import { useLocalPeer } from '@entities/call';
import { RoomModel } from '@entities/room';
import { Person, useLeaveSpeakingQueue, useSpeakingQueueStore } from '@entities/speaking-queue';
import { CallNotification } from '@features/calls/call-notifications';
import { IsSpeakerBadge } from '@features/speaking-queue/is-speaker-badge';
import { IsSpeakerFrame } from '@features/speaking-queue/is-speaker-frame';
import { RemoveFromSpeakingQueueOnPeerLeft } from '@features/speaking-queue/remove-from-speaking-queue-on-peer-left';
import { ToggleAV } from '@features/speaking-queue/toggle-av/ui/toggle-av';
import { ToggleJoinSpeakingQueueButton } from '@features/speaking-queue/toggle-join-speaking-queue-button';
import { PeerList } from '@widgets/calls/peer-list';
import { SpeakingQueueWidget } from '@widgets/calls/speaking-queue';
import { FC, useEffect } from 'react';

export interface LiveCallWidgetProps {
  room: RoomModel;
}

export const LiveCallWidget: FC<LiveCallWidgetProps> = ({ room }) => {
  const {
    liveblocks: { enterRoom, leaveRoom },
  } = useSpeakingQueueStore();
  const leaveQueue = useLeaveSpeakingQueue();
  const videoUser = useLocalPeer();

  useEffect(() => {
    enterRoom(room.id);
    return () => {
      leaveRoom();
    };
  }, [enterRoom, leaveRoom, room.id]);

  useEffect(() => {
    return () => {
      videoUser &&
        leaveQueue({
          id: videoUser.id,
        });
    };
  }, [leaveQueue, videoUser]);

  if (!videoUser) return null;
  const person: Person = {
    id: videoUser.id,
  };

  return (
    <>
      <IsSpeakerBadge
        user={videoUser}
        className='mb-px block rounded-none py-4 text-center text-lg font-bold'
      />
      <PeerList />
      <div className='bottom fixed bottom-10 left-1/2 z-10 -translate-x-1/2 transform text-center'>
        <ToggleJoinSpeakingQueueButton size='xl' user={person} className='shadow-md' />
      </div>
      <ToggleAV user={person} />
      <IsSpeakerFrame user={person} />
      <CallNotification />
      <SpeakingQueueWidget />
      <RemoveFromSpeakingQueueOnPeerLeft />
    </>
  );
};
