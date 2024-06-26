import { useCallStore } from './call-model';

export const useParticipants = () => {
  return useCallStore((state) => state.everyone);
};
