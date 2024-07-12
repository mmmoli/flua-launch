import { Person, useJoinSpeakingQueue, useUserIsInSpeakingQueue } from '@entities/speaking-queue';
import { useAnalytics } from '@shared/services/analytics/nextjs';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface JoinSpeakingQueueButtonProps extends ButtonProps {
  user: Person;
}

export const JoinSpeakingQueueButton: FC<JoinSpeakingQueueButtonProps> = ({
  children = 'Join Queue',
  user,
  ...props
}) => {
  const join = useJoinSpeakingQueue();
  const hasJoined = useUserIsInSpeakingQueue({ user });
  const events = useAnalytics();

  const handleClick = useCallback(() => {
    join(user);
    events(`speaking-queue:joined`);
  }, [events, join, user]);

  return (
    <Button {...props} disabled={hasJoined} onClick={handleClick}>
      {children}
    </Button>
  );
};
