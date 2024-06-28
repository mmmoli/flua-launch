'use client';

import { useUserHasJoinedCall } from '@entities/call';
import { RoomModel } from '@entities/room';
import dynamic from 'next/dynamic';
import { FC, Suspense, useCallback, useState } from 'react';

import { VideoProvider } from './video-provider';

const LiveCallWidget = dynamic(
  () => import('@widgets/calls/live-call').then((mod) => mod.LiveCallWidget),
  { ssr: false }
);

const WaitingAreaWidget = dynamic(
  () => import('@widgets/rooms/waiting-area').then((mod) => mod.WaitingAreaWidget),
  { ssr: false }
);

export const RoomGatewayWidget: FC<{ room: RoomModel }> = ({ room }) => {
  const hasJoinedCall = useUserHasJoinedCall();

  return (
    <VideoProvider>
      {hasJoinedCall ? (
        <Suspense fallback='Joining room…'>
          <LiveCallWidget room={room} />
        </Suspense>
      ) : (
        <Suspense fallback='Joining Waiting area…'>
          <WaitingAreaWidget room={room} />
        </Suspense>
      )}
    </VideoProvider>
  );
};
