import { useCallStore } from './call-model';

export const useLeaveSpeakingQueue = () => {
  return useCallStore((state) => state.leaveSpeakingQueue);
};
