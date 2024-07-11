import {
  Person,
  useJoinSpeakingQueue,
  useToggleJoiningSpeakingQueue,
  useUserIsInSpeakingQueue,
} from '@entities/speaking-queue';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface ToggleJoinSpeakingQueueKeypressProps {
  user: Person;
}

export const ToggleJoinSpeakingQueueKeypress: FC<ToggleJoinSpeakingQueueKeypressProps> = ({
  user,
  ...props
}) => {
  return null;
};
