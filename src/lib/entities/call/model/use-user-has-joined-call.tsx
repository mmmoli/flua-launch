'use client';

import { selectIsConnectedToRoom, useHMSStore } from '@100mslive/react-sdk';

export const useUserHasJoinedCall = () => {
  const hasJoined = useHMSStore(selectIsConnectedToRoom);
  return hasJoined ?? false;
};
