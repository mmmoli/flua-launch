'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form as DSForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form';
import { Input } from '@ui/input';
import { SubmitButton } from '@ui/submit-button';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { openRoomAction } from '../api/open-room';
import { RoomSchema, roomSchema } from '../lib/schema';

export interface FormProps {
  userId: string;
}

export const OpenRoomForm: FC<FormProps> = ({ userId }) => {
  const form = useForm<RoomSchema>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      name: '',
    },
  });

  return (
    <DSForm {...form}>
      <form action={openRoomAction}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Lit Room' {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <input type='hidden' name='userId' value={userId} />
        <SubmitButton size='sm'>Create Room</SubmitButton>
      </form>
    </DSForm>
  );
};
