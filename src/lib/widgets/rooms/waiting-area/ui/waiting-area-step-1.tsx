'use client';

import { useCallActions, useCallContext, useUserHasJoinedCall } from '@entities/call';
import { useSession } from '@shared/services/auth/client';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { FC, useCallback, useEffect, useState } from 'react';

import { WaitingRoomForm } from './waiting-area-form';

export interface WaitingAreaStepOneProps {
  onNext: () => void;
  roomCode?: string;
}

export const WaitingAreaStepOne: FC<WaitingAreaStepOneProps> = ({ onNext, roomCode }) => {
  const { data } = useSession();
  const defaultDisplayName = data?.user.name || undefined;
  return (
    <Card className='w-full md:max-w-sm'>
      <CardHeader>
        <CardTitle>Join the call</CardTitle>
      </CardHeader>
      <CardContent>
        <WaitingRoomForm roomCode={roomCode} onSubmit={onNext} displayName={defaultDisplayName} />
      </CardContent>
    </Card>
  );
};
