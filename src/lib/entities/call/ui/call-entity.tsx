'use client';

import { HMSRoomProvider } from '@100mslive/react-sdk';
import { FC, ReactNode } from 'react';

export interface CallEntityProps {
  children: ReactNode;
}

export const CallEntity: FC<CallEntityProps> = ({ children }) => {
  return <HMSRoomProvider leaveOnUnload>{children}</HMSRoomProvider>;
};
