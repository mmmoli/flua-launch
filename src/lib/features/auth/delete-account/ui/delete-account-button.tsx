'use client';

import { Button, ButtonProps } from '@ui/button';
import { toast } from '@ui/sonner';
import { Loader2 } from 'lucide-react';
import { FC, useCallback } from 'react';
import { useFormStatus } from 'react-dom';

import { deleteAccountAction } from '../api/delete-account-action';
import { DeleteAccountUseCaseDto } from '../lib/schemas';

export type DeleteAccountButtonProps = ButtonProps & DeleteAccountUseCaseDto;

const InnerDeleteAccountButton: FC<DeleteAccountButtonProps> = ({
  children = 'Delete Account',
  variant = 'destructive',
  ...props
}) => {
  const { pending } = useFormStatus();
  return (
    <Button variant={variant} {...props} type='submit' disabled={pending}>
      {pending ? <Loader2 /> : children}
    </Button>
  );
};

export const DeleteAccountButton: FC<DeleteAccountButtonProps> = (props) => {
  const action = useCallback(async (values: FormData) => {
    toast.promise(deleteAccountAction(values), {
      loading: 'Deleting Account…',
      error: 'Error Deleting Account',
    });
  }, []);

  return (
    <form action={action}>
      <input type='hidden' name='userId' value={props.userId} />
      <InnerDeleteAccountButton {...props} />
    </form>
  );
};
