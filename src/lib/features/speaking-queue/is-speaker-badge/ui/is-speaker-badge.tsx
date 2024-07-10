import { Person, useUserIsSpeaker } from '@entities/speaking-queue';
import { Badge, BadgeProps } from '@ui/badge';
import { FC, useCallback } from 'react';

export interface IsSpeakerBadgeProps extends BadgeProps {
  user: Person;
}

export const IsSpeakerBadge: FC<IsSpeakerBadgeProps> = ({ children = 'LIVE', user, ...props }) => {
  const isSpeaker = useUserIsSpeaker({ user });
  if (!isSpeaker) return null;
  return <Badge {...props}>{children}</Badge>;
};
