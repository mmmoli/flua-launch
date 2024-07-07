'use client';

import { Button, ButtonProps } from '@ui/button';
import { toast } from '@ui/sonner';
import { Loader2 } from 'lucide-react';
import { FC, useCallback } from 'react';
import { useFormStatus } from 'react-dom';

import { closeRoomAction } from '../api/close-room-action';
import { CloseRoomUseCaseDto } from '../lib/schemas';

export type CloseRoomButtonProps = ButtonProps & CloseRoomUseCaseDto;

const InnerCloseRoomButton: FC<CloseRoomButtonProps> = ({ children = 'Close Room', ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type='submit' disabled={pending}>
      {pending ? <Loader2 /> : children}
    </Button>
  );
};

export const CloseRoomButton: FC<CloseRoomButtonProps> = (props) => {
  const action = useCallback(async (values: FormData) => {
    toast.promise(closeRoomAction(values), {
      loading: 'Closing room…',
      success: () => {
        return `Room Closed`;
      },
      error: 'Error CLosing Room',
    });
  }, []);

  return (
    <form action={action}>
      <input type='hidden' name='roomId' value={props.roomId} />
      <input type='hidden' name='userId' value={props.userId} />
      <InnerCloseRoomButton {...props} />
    </form>
  );
};
