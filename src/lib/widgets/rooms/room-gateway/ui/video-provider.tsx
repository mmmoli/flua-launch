import { HMSRoomProvider } from '@100mslive/react-sdk';
import { FC, ReactNode } from 'react';

export const VideoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <HMSRoomProvider>{children}</HMSRoomProvider>;
};
