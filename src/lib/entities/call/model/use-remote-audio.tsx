'use client';

import { selectIsPeerAudioEnabled, useAVToggle, useHMSStore } from '@100mslive/react-sdk';

import { PeerModel } from './call-types';

export const useRemoteAudio = (peer: PeerModel) => {
  const audioOn = useHMSStore(selectIsPeerAudioEnabled(peer.id));

  return {
    audioOn,
  };
};
