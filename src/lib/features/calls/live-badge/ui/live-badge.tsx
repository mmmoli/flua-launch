import { useJoinCall, User, useUserIsSpeaking } from '@entities/call';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface LiveBadgeProps extends ButtonProps {
  user?: User;
}

export const LiveBadge: FC<LiveBadgeProps> = ({ children = 'Join', user, ...props }) => {
  const isLive = useUserIsSpeaking({ user });
  return isLive && <div>LIVE</div>;
};
