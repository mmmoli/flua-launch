import { useCallStore } from './call-model';

export const useJoinCall = () => {
  return useCallStore((state) => state.joinCall);
};
