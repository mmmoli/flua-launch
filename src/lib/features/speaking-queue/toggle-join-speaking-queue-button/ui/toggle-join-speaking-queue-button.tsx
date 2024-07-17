import {
  Person,
  useJoinSpeakingQueue,
  usePositionInSpeakingQueue,
  useToggleJoiningSpeakingQueue,
  useUserIsInSpeakingQueue,
} from '@entities/speaking-queue';
import { useAnalytics } from '@shared/services/analytics/nextjs';
import { Button, ButtonProps } from '@ui/button';
import { toast } from '@ui/sonner';
import { Hand, MicVocal } from 'lucide-react';
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
  const position = usePositionInSpeakingQueue({ user });
  const events = useAnalytics();

  const handleClick = useCallback(() => {
    toggle();
    events(hasJoined ? `speaking-queue:joined` : `speaking-queue:left`);
    hasJoined
      ? toast.success(`Joined Queue in position #${position}`, {
          icon: <MicVocal className='h-4 w-4' />,
        })
      : toast.success('Left Queue', {
          icon: <Hand className='h-4 w-4' />,
        });
  }, [events, hasJoined, toggle, position]);

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
