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

import { type WaitingRoomFormSchema, waitingRoomFormSchema } from '../lib/schema';

export interface WaitingRoomFormProps {}

export const WaitingRoomForm: FC<WaitingRoomFormProps> = () => {
  const form = useForm<WaitingRoomFormSchema>({
    resolver: zodResolver(waitingRoomFormSchema),
    defaultValues: {
      roomCode: '',
    },
  });

  return (
    <DSForm {...form}>
      <form>
        <FormField
          control={form.control}
          name='roomCode'
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
