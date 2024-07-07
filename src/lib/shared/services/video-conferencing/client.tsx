'use client';

import { HMSRoomProvider, useHMSActions } from '@100mslive/react-sdk';
import { FC, ReactNode, useEffect } from 'react';

export type VideoRoomProviderProps = {
  children: ReactNode;
};

export const VideoRoomProvider: FC<VideoRoomProviderProps> = ({ children }) => {
  return (
    // `leaveOnUnload` doesn't work for me, So I created <VideoRoomUnsubscribe />
    <HMSRoomProvider leaveOnUnload={true}>
      <VideoRoomUnsubscribe>{children}</VideoRoomUnsubscribe>
    </HMSRoomProvider>
  );
};

export const VideoRoomUnsubscribe: FC<{ children: ReactNode }> = ({ children }) => {
  const hmsActions = useHMSActions();

  useEffect(() => {
    return () => {
      hmsActions.leave();
    };
  }, [hmsActions]);

  return children;
};
