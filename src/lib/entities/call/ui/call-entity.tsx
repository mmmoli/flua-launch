'use client';

import { VideoRoomProvider } from '@shared/services/video-conferencing';
import { FC, ReactNode, useState } from 'react';

import { CallEntityContext, Context } from '../lib/call-entity-context';

export interface CallEntityProps {
  children: ReactNode;
}

export const CallEntity: FC<CallEntityProps> = ({ children }) => {
  const [store, set] = useState<CallEntityContext>({
    roomCode: undefined,
    displayName: undefined,
  });

  return (
    <VideoRoomProvider>
      <Context.Provider value={[store, set]}>{children}</Context.Provider>
    </VideoRoomProvider>
  );
};
