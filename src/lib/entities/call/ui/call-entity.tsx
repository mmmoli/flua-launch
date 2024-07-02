'use client';

import { HMSRoomProvider } from '@100mslive/react-sdk';
import { FC, ReactNode, useState } from 'react';

import { CallEntityContext, Context } from '../lib/call-entity-context';

export interface CallEntityProps {
  children: ReactNode;
}

export const CallEntity: FC<CallEntityProps> = ({ children }) => {
  const [store, set] = useState<CallEntityContext>({
    authToken: undefined,
    displayName: undefined,
  });

  return (
    <HMSRoomProvider leaveOnUnload={true}>
      <Context.Provider value={[store, set]}>{children}</Context.Provider>
    </HMSRoomProvider>
  );
};
