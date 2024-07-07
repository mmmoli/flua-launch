'use client';

import { User } from '@shared/services/auth/client';
import { Button, ButtonProps } from '@ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog';
import { FC, useCallback, useState } from 'react';

import { OpenRoomForm } from './open-room-form';

export interface OpenRoomDialogProps extends ButtonProps {
  userId: NonNullable<User['id']>;
}

export const OpenRoomDialog: FC<OpenRoomDialogProps> = ({
  children = 'Open Room',
  size = 'lg',
  userId,
  ...props
}) => {
  const [open, setIsOpen] = useState(false);

  const handleOnSubmit = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={size} {...props}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Open Room</DialogTitle>
        </DialogHeader>
        <OpenRoomForm userId={userId} onSubmit={handleOnSubmit} />
      </DialogContent>
    </Dialog>
  );
};
