'use client';

import { RoomModel } from '@entities/room';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserId } from '@shared/services/auth/client';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';
import { Input } from '@ui/input';
import { toast } from '@ui/sonner';
import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { renameRoomAction } from '../api/rename-room-action';
import { RenameRoomUseCaseDto, renameRoomUseCaseDtoSchema } from '../lib/schemas';

export type RenameRoomFormProps = {
  userId: UserId;
  room: RoomModel;
  onSubmit?: (values: RenameRoomUseCaseDto) => void;
};

export const RenameRoomForm: FC<RenameRoomFormProps> = ({ onSubmit, userId, room }) => {
  const form = useForm<RenameRoomUseCaseDto>({
    resolver: zodResolver(renameRoomUseCaseDtoSchema),
    defaultValues: {
      name: room.name,
      userId,
      roomId: room.id,
    },
  });

  const handleSubmit = useCallback(
    async (values: RenameRoomUseCaseDto) => {
      const tid = toast.loading('Renaming room…');
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('roomId', values.roomId);
        formData.append('userId', values.userId);
        await renameRoomAction(formData);
        onSubmit?.(values);
        toast.success('Room renameed!', {
          id: tid,
        });
      } catch (error) {
        toast.error('Something went wrong', {
          id: tid,
        });
      }
    },
    [onSubmit]
  );

  return (
    <Form {...form}>
      <form className='grid gap-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm'>Name</FormLabel>
              <FormControl>
                <Input placeholder={`e.g. "Lit Room"`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex gap-4'>
          <Button
            disabled={form.formState.isSubmitting || !form.formState.isValid}
            type='submit'
            onClick={form.handleSubmit(handleSubmit)}
            size='sm'
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};
