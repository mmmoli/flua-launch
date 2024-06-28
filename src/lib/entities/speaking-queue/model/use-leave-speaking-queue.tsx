import { useSpeakingQueueStore } from './speaking-queue-store';

export const useLeaveSpeakingQueue = () => {
  return useSpeakingQueueStore((state) => state.leave);
};
