'use client';

import { selectRemotePeers, useHMSStore } from '@100mslive/react-sdk';

export const useRemotePeers = () => {
  const peers = useHMSStore(selectRemotePeers);
  return peers;
};
