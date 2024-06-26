'use client';

import { useUserHasJoinedCall } from '@entities/call';
import { RoomModel } from '@entities/room';
import { WaitingAreaWidget } from '@widgets/rooms/waiting-area';
import dynamic from 'next/dynamic';
import { FC, Suspense, useCallback, useState } from 'react';

const LiveCallWidget = dynamic(
  () => import('@widgets/calls/live-call').then((mod) => mod.LiveCallWidget),
  { ssr: false }
);

export const RoomGatewayWidget: FC<{ room: RoomModel }> = ({ room }) => {
  const hasJoinedCall = useUserHasJoinedCall();

  return hasJoinedCall ? (
    <Suspense>
      <LiveCallWidget room={room} />
    </Suspense>
  ) : (
    <WaitingAreaWidget room={room} />
  );
};
