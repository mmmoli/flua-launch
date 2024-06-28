import { useCallActions } from '@entities/call';
import { Button, ButtonProps } from '@ui/button';
import { Loader2 } from 'lucide-react';
import { FC, useCallback, useState } from 'react';

export interface JoinCallButtonProps extends ButtonProps {
  roomCode: string;
  displayName: string;
}

export const JoinCallButton: FC<JoinCallButtonProps> = ({
  children = 'Join',
  roomCode,
  displayName,
  ...props
}) => {
  const actions = useCallActions();
  const [isJoining, setIsJoining] = useState(false);

  const handleClick = useCallback(async () => {
    setIsJoining(true);
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
    setIsJoining(false);
  }, [actions, roomCode, displayName]);

  return (
    <Button {...props} disabled={isJoining} onClick={handleClick}>
      {isJoining ? <Loader2 className='mr-2' /> : null}
      {children}
    </Button>
  );
};
