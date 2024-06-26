import { useCallStore, User } from './call-model';
import { useParticipants } from './use-participants';

export interface UseUserHasJoinedCall {
  user: User;
}

const USER = {
  id: '1',
  name: 'John Doe',
  avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
};

export const useUserHasJoinedCall = (opts?: UseUserHasJoinedCall) => {
  const user = opts?.user ?? USER;
  const everyone = useParticipants();
  return Object.hasOwn(everyone, user.id);
};
