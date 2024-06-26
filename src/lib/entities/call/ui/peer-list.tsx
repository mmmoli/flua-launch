'use client';

import { FC } from 'react';

import { usePeers } from '../model';
import { Peer } from './peer';

export interface PeerListProps {}

export const PeerList: FC<PeerListProps> = () => {
  const peers = usePeers();
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {peers.map((peer) => (
        <Peer key={peer.id} peer={peer} />
      ))}
    </div>
  );
};
