import { useCallStore } from './call-model';

export const useJoinSpeakingQueue = () => {
  return useCallStore((state) => state.joinSpeakingQueue);
};
