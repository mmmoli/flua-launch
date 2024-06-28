import { User } from './speaking-queue-types';
import { useJoinSpeakingQueue } from './use-join-speaking-queue';
import { useLeaveSpeakingQueue } from './use-leave-speaking-queue';
import { useUserIsInSpeakingQueue } from './use-user-is-in-speaking-queue';

export interface UseToggleJoiningSpeakingQueueOpts {
  user: User;
}

const USER = {
  id: '1',
  name: 'John Doe',
  avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
};

export const useToggleJoiningSpeakingQueue = (opts?: UseToggleJoiningSpeakingQueueOpts) => {
  const user = opts?.user ?? USER;
  const join = useJoinSpeakingQueue();
  const leave = useLeaveSpeakingQueue();
  const hasJoined = useUserIsInSpeakingQueue();
  hasJoined ? leave(USER) : join(USER);
};
