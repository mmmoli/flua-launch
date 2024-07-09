'use client';

import { HMSRoomState, selectRoomState, useHMSStore } from '@100mslive/react-sdk';

const loadingStates = [HMSRoomState.Connecting, HMSRoomState.Disconnecting];

export const useIsLoading = (): boolean => {
  const roomState = useHMSStore(selectRoomState);
  return loadingStates.includes(roomState) || !roomState;
};
