import { useCallActions, useIsLoading } from '@entities/call';
import { Button, ButtonProps } from '@ui/button';
import { Loader2 } from 'lucide-react';
import { FC, useCallback, useState } from 'react';

export interface JoinCallButtonProps extends ButtonProps {
  roomCode: string;
  displayName: string;
  userId?: string;
}

export const JoinCallButton: FC<JoinCallButtonProps> = ({
  children = 'Join',
  roomCode,
  displayName,
  disabled,
  userId,
  ...props
}) => {
  const actions = useCallActions();
  const isLoading = useIsLoading();

  const handleClick = useCallback(async () => {
    const authToken = await actions.getAuthTokenByRoomCode({
      roomCode,
      userId,
    });
    await actions.join({
      authToken,
      userName: displayName,
      rememberDeviceSelection: true,
      captureNetworkQualityInPreview: false,
      settings: { isAudioMuted: true },
    });
  }, [actions, roomCode, userId, displayName]);

  return (
    <Button {...props} disabled={disabled || isLoading} onClick={handleClick}>
      {isLoading ? <Loader2 className='mr-2' /> : null}
      {children}
    </Button>
  );
};
