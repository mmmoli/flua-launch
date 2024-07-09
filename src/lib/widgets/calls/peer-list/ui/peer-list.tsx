'use client';

import { Peer, usePeers } from '@entities/call';
import { useSpeakingQueueStore } from '@entities/speaking-queue';
import { FC, useMemo } from 'react';

import { orderPeersBySpeakingQueue } from '../lib/order-peers-by-speaking-queue';

export interface PeerListProps {}

export const PeerList: FC<PeerListProps> = () => {
  const rawPeers = usePeers();
  const { queue } = useSpeakingQueueStore();
  const sortedPeers = useMemo(() => orderPeersBySpeakingQueue(rawPeers, queue), [rawPeers, queue]);

  return (
    <div className='grid grid-cols-2 gap-px'>
      {sortedPeers.map((peer, i) => (
        <Peer key={peer.id} peer={peer} style={{ order: i + 1 }} />
      ))}
    </div>
  );
};
