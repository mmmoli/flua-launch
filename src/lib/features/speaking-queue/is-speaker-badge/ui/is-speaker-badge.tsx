import { User, useUserIsSpeaker } from '@entities/speaking-queue';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface IsSpeakerBadgeProps extends ButtonProps {
  user?: User;
}

export const IsSpeakerBadge: FC<IsSpeakerBadgeProps> = ({ children = 'Join', user, ...props }) => {
  const isSpeaker = useUserIsSpeaker({ user });
  return isSpeaker && <div>LIVE</div>;
};
