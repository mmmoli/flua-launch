import { User } from './speaking-queue-types';
import { useSpeaker } from './use-speaker';

export interface UseUserIsSpeakingOpts {
  user: User;
}

export const useUserIsSpeaker = (opts: UseUserIsSpeakingOpts) => {
  const speaker = useSpeaker();
  return speaker ? opts.user.id === speaker.id : false;
};
