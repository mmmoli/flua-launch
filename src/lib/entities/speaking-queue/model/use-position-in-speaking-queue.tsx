import { Person } from './speaking-queue-types';
import { useSpeakingQueue } from './use-speaking-queue';

export interface UsePositionInSpeakingQueue {
  user: Person;
}

export const usePositionInSpeakingQueue = (opts: UsePositionInSpeakingQueue) => {
  const queue = useSpeakingQueue();
  const find = queue.map(({ id }) => id).indexOf(opts.user.id);
  return find === -1 ? null : find + 1;
};
