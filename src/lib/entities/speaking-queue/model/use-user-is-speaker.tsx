import { User } from './speaking-queue-types';
import { useSpeaker } from './use-speaker';

export interface UseUserIsSpeakingOpts {
  user?: User;
}

const USER = {
  id: '1',
  name: 'John Doe',
  avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
};

export const useUserIsSpeaker = (opts?: UseUserIsSpeakingOpts) => {
  const user = opts?.user ?? USER;
  const speaker = useSpeaker();
  return speaker ? user.id === speaker.id : false;
};
