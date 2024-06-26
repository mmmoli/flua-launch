'use client';

import { RoomModel } from '@entities/room';
import { WaitingAreaWidget } from '@widgets/rooms/waiting-area';
import dynamic from 'next/dynamic';
import { FC, Suspense, useCallback, useState } from 'react';

const LiveCallWidget = dynamic(
  () => import('@widgets/rooms/live-call').then((mod) => mod.LiveCallWidget),
  { ssr: false }
);

export const RoomGatewayWidget: FC<{ room: RoomModel }> = ({ room }) => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = useCallback(() => {
    setHasEntered(true);
  }, []);

  return hasEntered ? (
    <Suspense>
      <LiveCallWidget room={room} />
    </Suspense>
  ) : (
    <WaitingAreaWidget room={room} onEnterCallback={handleEnter} />
  );
};
