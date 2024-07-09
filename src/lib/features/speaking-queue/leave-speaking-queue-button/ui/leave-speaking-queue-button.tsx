import { Person, useLeaveSpeakingQueue, useUserIsInSpeakingQueue } from '@entities/speaking-queue';
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

  const handleClick = useCallback(() => {
    leave(user);
  }, [leave, user]);

  return (
    <Button {...props} disabled={!hasJoined} onClick={handleClick}>
      {children}
    </Button>
  );
};
