import { User } from './speaking-queue-types';
import { useSpeakingQueue } from './use-speaking-queue';

export interface UseUserIsInSpeakingQueue {
  user: User;
}

const USER = {
  id: '1',
  name: 'John Doe',
  avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
};

export const useUserIsInSpeakingQueue = (opts?: UseUserIsInSpeakingQueue) => {
  const user = opts?.user ?? USER;
  const queue = useSpeakingQueue();
  return queue.map(({ id }) => id).includes(user.id);
};
