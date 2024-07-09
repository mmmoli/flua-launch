'use client';

import { useCallActions, useCallContext } from '@entities/call';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui/button';
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
import { ArrowRight } from 'lucide-react';
import { FC, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { type WaitingRoomFormSchema, waitingRoomFormSchema } from '../lib/schema';

export interface WaitingRoomFormProps {
  onSubmit?: (data: WaitingRoomFormSchema) => void;
  roomCode?: string;
  displayName?: string;
  userId?: string;
}

export const WaitingRoomForm: FC<WaitingRoomFormProps> = ({
  onSubmit,
  roomCode,
  userId,
  displayName = '',
}) => {
  const [_, setContext] = useCallContext();
  const actions = useCallActions();

  const form = useForm<WaitingRoomFormSchema>({
    resolver: zodResolver(waitingRoomFormSchema),
    defaultValues: {
      roomCode,
      displayName,
    },
  });

  const handleSubmit = useCallback(
    async ({ displayName, roomCode }: WaitingRoomFormSchema) => {
      const authToken = await actions.getAuthTokenByRoomCode({
        roomCode,
        userId,
      });

      actions.preview({
        authToken,
        userName: displayName,
        rememberDeviceSelection: true,
        captureNetworkQualityInPreview: false,
        settings: { isAudioMuted: true },
      });

      setContext({
        displayName,
        roomCode,
      });

      onSubmit?.({ displayName, roomCode });
    },
    [actions, userId, setContext, onSubmit]
  );

  return (
    <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(handleSubmit)}>
      <DSForm {...form}>
        <FormField
          control={form.control}
          name='roomCode'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This room needs a code to enter.
                <br /> Ask the host for the code.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='displayName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='flex gap-1' disabled={!form.formState.isValid}>
          <span>Next</span>
          <ArrowRight className='size-4' />
        </Button>
      </DSForm>
    </form>
  );
};
