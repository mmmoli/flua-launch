'use client';

import { useSession } from '@shared/services/auth/client';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { FC, useCallback, useEffect, useState } from 'react';

import { WaitingRoomForm } from './waiting-area-form';

export interface WaitingAreaStepOneProps {
  onNext: () => void;
  room: {
    name: string;
    code?: string;
  };
}

export const WaitingAreaStepOne: FC<WaitingAreaStepOneProps> = ({
  onNext,
  room: { name, code },
}) => {
  const { data } = useSession();
  const defaultDisplayName = data?.user.name || undefined;
  return (
    <Card className='w-full md:max-w-sm'>
      <CardHeader>
        <CardTitle>Join {name}</CardTitle>
      </CardHeader>
      <CardContent>
        <WaitingRoomForm roomCode={code} onSubmit={onNext} displayName={defaultDisplayName} />
      </CardContent>
    </Card>
  );
};
