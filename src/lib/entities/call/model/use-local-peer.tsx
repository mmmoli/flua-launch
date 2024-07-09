'use client';

import { selectLocalPeer, useHMSStore } from '@100mslive/react-sdk';

export const useLocalPeer = () => {
  const me = useHMSStore(selectLocalPeer);
  return me;
};
