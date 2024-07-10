import { Person, useUserIsSpeaker } from '@entities/speaking-queue';
import { cn } from '@shared/design-system/utils';
import { Badge, BadgeProps } from '@ui/badge';
import { FC, useCallback } from 'react';

export interface IsSpeakerBadgeProps extends BadgeProps {
  user: Person;
}

export const IsSpeakerBadge: FC<IsSpeakerBadgeProps> = ({
  children = 'LIVE',
  className,
  user,
  ...props
}) => {
  const isSpeaker = useUserIsSpeaker({ user });
  if (!isSpeaker) return null;
  return (
    <Badge className={cn(className, 'justify-center')} {...props}>
      {children}
    </Badge>
  );
};
