import { useJoinSpeakingQueue, User, useUserIsInSpeakingQueue } from '@entities/speaking-queue';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface JoinSpeakingQueueButtonProps extends ButtonProps {
  user: User;
}

export const JoinSpeakingQueueButton: FC<JoinSpeakingQueueButtonProps> = ({
  children = 'Join Queue',
  user,
  ...props
}) => {
  const join = useJoinSpeakingQueue();
  const hasJoined = useUserIsInSpeakingQueue({ user });

  const handleClick = useCallback(() => {
    join(user);
  }, [join, user]);

  return (
    <Button {...props} disabled={hasJoined} onClick={handleClick}>
      {children}
    </Button>
  );
};
