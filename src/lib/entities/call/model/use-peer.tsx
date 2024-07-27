'use client';

import { selectPeerByID, useHMSStore } from '@100mslive/react-sdk';

export interface UsePeerOpts {
  peerID: string;
}

export const usePeer = ({ peerID }: UsePeerOpts) => {
  const peers = useHMSStore(selectPeerByID(peerID));
  return peers;
};
