import { Person, useLeaveSpeakingQueue, useUserIsInSpeakingQueue } from '@entities/speaking-queue';
import { useAnalytics } from '@shared/services/analytics/nextjs';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface LeaveSpeakingQueueButtonProps extends ButtonProps {
  user: Person;
}

export const LeaveSpeakingQueueButton: FC<LeaveSpeakingQueueButtonProps> = ({
  children = 'Leave Queue',
  user,
  ...props
}) => {
  const leave = useLeaveSpeakingQueue();
  const hasJoined = useUserIsInSpeakingQueue({ user });
  const events = useAnalytics();

  const handleClick = useCallback(() => {
    leave(user);
    events(`speaking-queue:left`);
  }, [events, leave, user]);

  return (
    <Button {...props} disabled={!hasJoined} onClick={handleClick}>
      {children}
    </Button>
  );
};
