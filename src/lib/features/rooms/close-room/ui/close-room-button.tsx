import { Button, ButtonProps } from '@ui/button';
import { Loader2 } from 'lucide-react';
import { FC } from 'react';
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
  return (
    <form action={closeRoomAction}>
      <input type='hidden' name='name' value={props.name} />
      <input type='hidden' name='userId' value={props.userId} />
      <InnerCloseRoomButton {...props} />
    </form>
  );
};
