import { useCallStore } from './call-model';

export const useLeaveCall = () => {
  return useCallStore((state) => state.joinCall);
};
