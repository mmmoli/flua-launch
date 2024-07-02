import { useCallActions } from '@entities/call';
import { Button, ButtonProps } from '@ui/button';
import { Loader2 } from 'lucide-react';
import { FC, useCallback, useState } from 'react';

export interface JoinCallButtonProps extends ButtonProps {
  roomCode: string;
  displayName: string;
  isLoading?: boolean;
}

export const JoinCallButton: FC<JoinCallButtonProps> = ({
  children = 'Join',
  roomCode,
  displayName,
  disabled,
  isLoading = false,
  ...props
}) => {
  const actions = useCallActions();
  const [isPending, setisPending] = useState(isLoading);

  const handleClick = useCallback(async () => {
    setisPending(true);
    const authToken = await actions.getAuthTokenByRoomCode({
      roomCode,
    });
    await actions.join({
      authToken,
      userName: displayName,
      rememberDeviceSelection: true,
      captureNetworkQualityInPreview: false,
      settings: { isAudioMuted: true },
    });
    setisPending(false);
  }, [actions, roomCode, displayName]);

  return (
    <Button {...props} disabled={disabled || isPending} onClick={handleClick}>
      {isPending ? <Loader2 className='mr-2' /> : null}
      {children}
    </Button>
  );
};
