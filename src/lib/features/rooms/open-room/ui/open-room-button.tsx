'use client';

import { Button, ButtonProps } from '@ui/button';
import { Loader2 } from 'lucide-react';
import { FC } from 'react';
import { useFormStatus } from 'react-dom';

import { openRoomAction } from '../api/open-room-action';
import { OpenRoomUseCaseDto } from '../lib/schemas';

export type OpenRoomButtonProps = ButtonProps & OpenRoomUseCaseDto;

const InnerOpenRoomButton: FC<OpenRoomButtonProps> = ({ children = 'Open Room', ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type='submit' disabled={pending}>
      {pending ? <Loader2 className='h-4 w-4 animate-spin' /> : children}
    </Button>
  );
};

export const OpenRoomButton: FC<OpenRoomButtonProps> = (props) => {
  return (
    <form action={openRoomAction}>
      <input type='hidden' name='name' value={props.name} />
      <input type='hidden' name='ownerId' value={props.ownerId} />
      <InnerOpenRoomButton {...props} />
    </form>
  );
};
