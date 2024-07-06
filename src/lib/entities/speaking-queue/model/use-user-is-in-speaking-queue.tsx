import { User } from './speaking-queue-types';
import { useSpeakingQueue } from './use-speaking-queue';

export interface UseUserIsInSpeakingQueue {
  user: User;
}

export const useUserIsInSpeakingQueue = (opts: UseUserIsInSpeakingQueue) => {
  const queue = useSpeakingQueue();
  return queue.map(({ id }) => id).includes(opts.user.id);
};
