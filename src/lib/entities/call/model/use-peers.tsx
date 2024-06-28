'use client';

import { selectPeers, useHMSStore } from '@100mslive/react-sdk';

export const usePeers = () => {
  const peers = useHMSStore(selectPeers);
  return peers;
};
