import { PeerModel } from '@entities/call';
import { Person } from '@entities/speaking-queue';

export const orderPeersBySpeakingQueue = (peers: PeerModel[], queue: Person[]): PeerModel[] => {
  const orderMap = new Map(queue.map((speaker, index) => [speaker.id, index]));

  const [orderedPeers, unorderedPeers] = peers.reduce<[PeerModel[], PeerModel[]]>(
    (acc, peer) => {
      if (orderMap.has(peer.id)) {
        acc[0].push(peer);
      } else {
        acc[1].push(peer);
      }
      return acc;
    },
    [[], []]
  );

  orderedPeers.sort((a, b) => (orderMap.get(a.id) || 0) - (orderMap.get(b.id) || 0));
  return [...orderedPeers, ...unorderedPeers];
};
