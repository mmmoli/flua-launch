import { Person } from './speaking-queue-types';
import { useJoinSpeakingQueue } from './use-join-speaking-queue';
import { useLeaveSpeakingQueue } from './use-leave-speaking-queue';
import { useUserIsInSpeakingQueue } from './use-user-is-in-speaking-queue';

export interface UseToggleJoiningSpeakingQueueOpts {
  user: Person;
}

export const useToggleJoiningSpeakingQueue = (opts: UseToggleJoiningSpeakingQueueOpts) => {
  const join = useJoinSpeakingQueue();
  const leave = useLeaveSpeakingQueue();
  const hasJoined = useUserIsInSpeakingQueue({ user: opts.user });
  const fn = hasJoined ? leave : join;
  return () => fn(opts.user);
};
