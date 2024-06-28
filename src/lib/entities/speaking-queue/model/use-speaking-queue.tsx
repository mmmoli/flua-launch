import { useSpeakingQueueStore } from './speaking-queue-store';

export const useSpeakingQueue = () => {
  return useSpeakingQueueStore((state) => state.queue);
};
