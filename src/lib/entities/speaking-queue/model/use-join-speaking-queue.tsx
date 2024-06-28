import { useSpeakingQueueStore } from './speaking-queue-store';

export const useJoinSpeakingQueue = () => {
  return useSpeakingQueueStore((state) => state.join);
};
