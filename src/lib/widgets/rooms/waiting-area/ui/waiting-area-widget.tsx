'use client';

import { PeerList, useCallActions, useUserHasJoinedCall } from '@entities/call';
import { RoomModel } from '@entities/room';
import { JoinCallButton } from '@features/calls/join-call-button';
import dynamic from 'next/dynamic';
import { FC, Suspense, useCallback, useEffect } from 'react';
import { Banner } from './banner';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';

const LiveCallWidget = dynamic(
  () => import('@widgets/calls/live-call').then((mod) => mod.LiveCallWidget),
  { ssr: false }
);

export interface WaitingAreaWidgetProps {
  room: RoomModel;
}

export const WaitingAreaWidget: FC<WaitingAreaWidgetProps> = ({ room }) => {
  const hasJoinedCall = useUserHasJoinedCall();
  const actions = useCallActions();

  useEffect(() => {
    actions
      .getAuthTokenByRoomCode({
        roomCode: 'nzf-pdix-upm',
      })
      .then((authToken) => {
        actions.preview({
          authToken,
          userName: 'Michele',
          rememberDeviceSelection: true,
          captureNetworkQualityInPreview: false,
          settings: { isAudioMuted: true },
        });
      });
  }, [actions]);

  if (hasJoinedCall) {
    return (
      <Suspense fallback='Joining room…'>
        <LiveCallWidget room={room} />
      </Suspense>
    );
  }

  return (
    <div>
      <Banner roomName={room.name} />
      <div className='flex items-center gap-8'>
        <Card>
          <CardHeader>
            <CardTitle>Join the call</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You are about to join a call with other participants. Please make sure you are in a
              quiet environment and have a good internet connection.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Check yourself</CardTitle>
          </CardHeader>
          <CardContent>
            <PeerList />
            <JoinCallButton roomCode='nzf-pdix-upm' displayName='Michele' />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
