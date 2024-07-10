import {
  Person,
  useJoinSpeakingQueue,
  useToggleJoiningSpeakingQueue,
  useUserIsInSpeakingQueue,
} from '@entities/speaking-queue';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface ToggleJoinSpeakingQueueButtonProps extends ButtonProps {
  user: Person;
}

export const ToggleJoinSpeakingQueueButton: FC<ToggleJoinSpeakingQueueButtonProps> = ({
  children,
  user,
  variant,
  ...props
}) => {
  const toggle = useToggleJoiningSpeakingQueue({ user });
  const hasJoined = useUserIsInSpeakingQueue({ user });

  const handleClick = useCallback(() => {
    toggle();
  }, [toggle]);

  return (
    <Button
      {...props}
      variant={variant ? variant : hasJoined ? 'outline' : 'default'}
      onClick={handleClick}
    >
      {children ? children : hasJoined ? 'Leave Queue' : 'Join Queue'}
    </Button>
  );
};
