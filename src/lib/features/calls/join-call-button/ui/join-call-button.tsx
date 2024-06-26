import { useJoinCall, User } from '@entities/call';
import { Button, ButtonProps } from '@ui/button';
import { FC, useCallback } from 'react';

export interface JoinCallButtonProps extends ButtonProps {
  user: User;
}

export const JoinCallButton: FC<JoinCallButtonProps> = ({ children = 'Join', user, ...props }) => {
  const join = useJoinCall();

  const handleClick = useCallback(() => {
    join(user);
  }, [join, user]);

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};
