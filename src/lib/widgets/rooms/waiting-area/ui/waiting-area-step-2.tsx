'use client';

import { useCallActions, useCallContext } from '@entities/call';
import { RoomModel } from '@entities/room';
import { JoinCallButton } from '@features/calls/join-call-button';
import { useSession } from '@shared/services/auth/client';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { FC, useCallback, useEffect, useState } from 'react';

export interface WaitingAreaProps {
  room: RoomModel;
}

export const WaitingAreaStepTwo: FC<WaitingAreaProps> = ({ room }) => {
  const [callContext] = useCallContext();
  const { data } = useSession();

  return (
    <Card className='w-full md:max-w-sm'>
      <CardHeader>
        <CardTitle>All Ready?</CardTitle>
      </CardHeader>
      <CardContent>
        <JoinCallButton
          userId={data?.user.id}
          disabled={!callContext.roomCode}
          roomCode={callContext.roomCode!}
          displayName={callContext.displayName!}
        />
      </CardContent>
    </Card>
  );
};
