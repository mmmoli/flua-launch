import { usePositionInSpeakingQueue, User, useUserIsSpeaker } from '@entities/speaking-queue';
import { Badge, BadgeProps } from '@ui/badge';
import { FC, useCallback } from 'react';

export interface SpeakerPositionBadgeProps extends BadgeProps {
  user: User;
}

export const SpeakerPositionBadge: FC<SpeakerPositionBadgeProps> = ({
  children,
  user,
  ...props
}) => {
  const maybePosition = usePositionInSpeakingQueue({ user });
  if (!maybePosition) return null;
  return <Badge {...props}>{maybePosition}</Badge>;
};
