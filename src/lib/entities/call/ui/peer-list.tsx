'use client';

import { FC } from 'react';

import { usePeers } from '../model';
import { Peer } from './peer';

export interface PeerListProps {}

export const PeerList: FC<PeerListProps> = () => {
  const peers = usePeers();
  return (
    <div>
      {peers.map((peer) => (
        <Peer key={peer.id} peer={peer} />
      ))}
    </div>
  );
};
