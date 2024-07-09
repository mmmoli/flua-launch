'use client';

import { useAVToggle } from '@100mslive/react-sdk';
import { useCallback } from 'react';

export const useMyAudio = () => {
  const { isLocalAudioEnabled, toggleAudio: toggle } = useAVToggle();
  const isOnMute = !isLocalAudioEnabled;

  const mute = useCallback(() => {
    !isOnMute && toggle?.();
  }, [isOnMute, toggle]);

  const unmute = useCallback(() => {
    isOnMute && toggle?.();
  }, [isOnMute, toggle]);

  const toggleAudio = useCallback(() => {
    toggle?.();
  }, [toggle]);

  const shouldMute = useCallback(
    (value: boolean) => {
      const method = value ? mute : unmute;
      method();
    },
    [mute, unmute]
  );

  return {
    isOnMute,
    shouldMute,
    mute,
    toggleAudio,
    unmute,
  };
};
