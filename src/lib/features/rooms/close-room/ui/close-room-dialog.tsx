import { RoomModelId } from '@entities/room';
import { Button } from '@shared/design-system/components/ui/button';
import { UserId } from '@shared/services/auth/client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@ui/alert-dialog';
import { toast } from '@ui/sonner';
import { FC, MouseEventHandler, useCallback } from 'react';

import { closeRoomAction } from '../api/close-room-action';

export interface CloseRoomDialogProps {
  roomId: RoomModelId;
  userId: UserId;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose?: () => void;
}

export const CloseRoomDialog: FC<CloseRoomDialogProps> = ({
  roomId,
  userId,
  onClose,
  onOpenChange,
  open,
  ...props
}) => {
  const handleAction = useCallback(async () => {
    const tid = toast.loading('Closing room…');
    try {
      const formData = new FormData();
      formData.append('roomId', roomId);
      formData.append('userId', userId);
      await closeRoomAction(formData);
      toast.success('Room closed 💨', {
        id: tid,
      });
      onClose?.();
    } catch (e) {
      toast.error('Hmm something went wrong', {
        id: tid,
      });
    }
  }, [onClose, roomId, userId]);

  const handleCancel: MouseEventHandler = useCallback(
    (e) => {
      onClose?.();
    },
    [onClose]
  );

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your Room.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant='ghost' size='sm' onClick={handleCancel}>
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant='destructive' size='sm' onClick={handleAction}>
              Close
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
