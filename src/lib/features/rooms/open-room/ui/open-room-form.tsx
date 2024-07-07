'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@shared/services/auth/client';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form';
import { Input } from '@ui/input';
import { toast } from '@ui/sonner';
import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { openRoomAction } from '../api/open-room-action';
import { OpenRoomUseCaseDto, OpenRoomUseCaseDtoSchema } from '../lib/schemas';

export type OpenRoomFormProps = {
  userId: NonNullable<User['id']>;
  onSubmit?: (values: OpenRoomUseCaseDto) => void;
};

export const OpenRoomForm: FC<OpenRoomFormProps> = ({ onSubmit, userId }) => {
  const form = useForm<OpenRoomUseCaseDto>({
    resolver: zodResolver(OpenRoomUseCaseDtoSchema),
    defaultValues: {
      tier: 'FREE',
      ownerId: userId,
    },
  });

  const handleSubmit = useCallback(
    async (values: OpenRoomUseCaseDto) => {
      const tid = toast.loading('Opening room…');
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('ownerId', values.ownerId);
        formData.append('tier', values.tier!);
        await openRoomAction(formData);
        onSubmit?.(values);
        toast.success('Room opened!', {
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
                <Input placeholder='Lit Room…' {...field} />
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
