'use client';

import { Button, ButtonProps } from '@shared/design-system/components/ui/button';
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
  AlertDialogTrigger,
} from '@ui/alert-dialog';
import { toast } from '@ui/sonner';
import { FC, MouseEventHandler, useCallback } from 'react';

import { deleteAccountAction } from '../api/delete-account-action';

export interface DeleteAccountDialogProps extends ButtonProps {
  userId: UserId;
  onClose?: () => void;
}

export const DeleteAccountDialog: FC<DeleteAccountDialogProps> = ({
  userId,
  onClose,
  children = 'Delete Account',
  variant = 'destructive',
  ...props
}) => {
  const handleAction = useCallback(async () => {
    const tid = toast.loading('Deleting account…');
    try {
      const formData = new FormData();
      formData.append('userId', userId);
      await deleteAccountAction(formData);
      toast.success('Account Deleted 💨', {
        id: tid,
      });
      onClose?.();
    } catch (e) {
      toast.error('Hmm something went wrong', {
        id: tid,
      });
    }
  }, [onClose, userId]);

  const handleCancel: MouseEventHandler = useCallback(
    (e) => {
      onClose?.();
    },
    [onClose]
  );

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button {...props} variant={variant}>
          {children}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your Account.
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
              Delete Account
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
