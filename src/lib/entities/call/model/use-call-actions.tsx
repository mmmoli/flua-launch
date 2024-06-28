'use client';

import { useHMSActions } from '@100mslive/react-sdk';

export const useCallActions = () => {
  const hmsActions = useHMSActions();
  return hmsActions;
};
