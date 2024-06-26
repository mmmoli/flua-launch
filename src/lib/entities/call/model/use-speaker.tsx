import { useSpeakingQueue } from './use-speaking-queue';

export const useSpeaker = () => {
  const queue = useSpeakingQueue();
  return queue.length > 0 ? queue[0] : null;
};
