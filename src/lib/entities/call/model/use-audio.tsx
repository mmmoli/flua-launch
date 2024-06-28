'use client';

import { useAVToggle } from '@100mslive/react-sdk';
import { useCallback } from 'react';

export const useAudio = () => {
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

  return {
    isOnMute,
    mute,
    toggleAudio,
    unmute,
  };
};
