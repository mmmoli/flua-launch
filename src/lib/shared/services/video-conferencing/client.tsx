'use client';

import { HMSRoomProvider } from '@100mslive/react-sdk';
import { FC, ReactNode } from 'react';

export type VideoRoomProviderProps = {
  children: ReactNode;
};

export const VideoRoomProvider: FC<VideoRoomProviderProps> = ({ children }) => {
  return <HMSRoomProvider leaveOnUnload={true}>{children}</HMSRoomProvider>;
};
