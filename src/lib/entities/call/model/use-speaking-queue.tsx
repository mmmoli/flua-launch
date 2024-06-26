import { useCallStore } from './call-model';

export const useSpeakingQueue = () => {
  return useCallStore((state) => state.speakingQueue);
};
