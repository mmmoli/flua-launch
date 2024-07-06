'use client';

import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider as LiveblocksRoomProvider,
} from '@liveblocks/react/suspense';
import { env } from '@shared/config/env';
import { FC, ReactNode } from 'react';

export interface RealtimeProviderProps {
  children: ReactNode;
}

export const RealtimeProvider: FC<RealtimeProviderProps> = ({ children }) => {
  return (
    <LiveblocksProvider publicApiKey={env.NEXT_PUBLIC_LIVEBLOCK_PUBLIC_KEY}>
      {children}
    </LiveblocksProvider>
  );
};

export interface RealtimeRoomProviderProps {
  children: ReactNode;
  roomId: string;
}

export const RealtimeRoomProvider: FC<RealtimeRoomProviderProps> = ({ children, roomId }) => {
  return <LiveblocksRoomProvider id={roomId}>{children}</LiveblocksRoomProvider>;
};

export { ClientSideSuspense };
