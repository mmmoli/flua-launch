import { Person, usePositionInSpeakingQueue, useUserIsSpeaker } from '@entities/speaking-queue';
import { cn } from '@shared/design-system/utils';
import { Badge, BadgeProps } from '@ui/badge';
import { FC, useCallback } from 'react';

export interface SpeakerPositionBadgeProps extends BadgeProps {
  user: Person;
}

export const SpeakerPositionBadge: FC<SpeakerPositionBadgeProps> = ({
  children,
  user,
  variant,
  className,
  ...props
}) => {
  const maybePosition = usePositionInSpeakingQueue({ user });
  if (!maybePosition) return null;
  return (
    <Badge
      className={cn(className, 'justify-center')}
      variant={variant ? variant : maybePosition === 1 ? 'default' : 'outline'}
      {...props}
    >
      {maybePosition}
    </Badge>
  );
};
