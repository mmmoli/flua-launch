'use client';

import { useCallActions, useUserHasJoinedCall } from '@entities/call';
import { RoomModel } from '@entities/room';
import { RealtimeProvider } from '@shared/services/realtime';
import dynamic from 'next/dynamic';
import { FC, Suspense, useCallback, useState } from 'react';

import { WaitingAreaStepOne } from './waiting-area-step-1';
import { WaitingAreaStepTwo } from './waiting-area-step-2';

const LiveCallWidget = dynamic(
  () => import('@widgets/calls/live-call').then((mod) => mod.LiveCallWidget),
  { ssr: false }
);

export interface WaitingAreaWidgetProps {
  room: RoomModel;
}

export const WaitingAreaWidget: FC<WaitingAreaWidgetProps> = ({ room }) => {
  const hasJoinedCall = useUserHasJoinedCall();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = useCallback(() => {
    setCurrentStep((s) => s + 1);
  }, []);

  if (hasJoinedCall) {
    return (
      <Suspense fallback='Joining room…'>
        <RealtimeProvider>
          <LiveCallWidget room={room} />
        </RealtimeProvider>
      </Suspense>
    );
  }

  return (
    <div className='flex items-center justify-center'>
      {currentStep === 1 ? <WaitingAreaStepOne onNext={handleNextStep} /> : null}
      {currentStep === 2 ? <WaitingAreaStepTwo room={room} /> : null}
    </div>
  );
};
