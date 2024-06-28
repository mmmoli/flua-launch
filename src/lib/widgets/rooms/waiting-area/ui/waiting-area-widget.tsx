'use client';

import { useUserHasJoinedCall } from '@entities/call';
import { RoomModel } from '@entities/room';
import { JoinCallButton } from '@features/calls/join-call-button';
import dynamic from 'next/dynamic';
import { FC, Suspense, useCallback } from 'react';

const LiveCallWidget = dynamic(
  () => import('@widgets/calls/live-call').then((mod) => mod.LiveCallWidget),
  { ssr: false }
);

export interface WaitingAreaWidgetProps {
  room: RoomModel;
}

export const WaitingAreaWidget: FC<WaitingAreaWidgetProps> = ({ room }) => {
  const hasJoinedCall = useUserHasJoinedCall();

  if (hasJoinedCall) {
    return (
      <Suspense fallback='Joining room…'>
        <LiveCallWidget room={room} />
      </Suspense>
    );
  }

  return (
    <div>
      Waiting Room: {room.name}
      <JoinCallButton roomCode='nzf-pdix-upm' displayName='Michele' />
    </div>
  );
};
