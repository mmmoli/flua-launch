import { useMyAudio } from '@entities/call';
import { Person, useUserIsSpeaker } from '@entities/speaking-queue';
import { FC, useEffect } from 'react';

export interface ToggleAVProps {
  user: Person;
}

export const ToggleAV: FC<ToggleAVProps> = ({ user }) => {
  const isSpeaker = useUserIsSpeaker({ user });
  const { shouldMute } = useMyAudio();

  useEffect(() => {
    shouldMute(isSpeaker);
  }, [isSpeaker, shouldMute]);

  return null;
};
