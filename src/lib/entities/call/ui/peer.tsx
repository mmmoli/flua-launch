'use client';

import { useVideo } from '@100mslive/react-sdk';
import { Badge } from '@ui/badge';
import { Volume2, VolumeX } from 'lucide-react';
import { ComponentPropsWithoutRef, FC } from 'react';

import { PeerModel, useRemoteAudio } from '../model';

export interface PeerProps extends ComponentPropsWithoutRef<'div'> {
  peer: PeerModel;
}

export const Peer: FC<PeerProps> = ({ peer, ...props }) => {
  const { audioOn } = useRemoteAudio(peer);

  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });

  return (
    <div {...props}>
      <video
        ref={videoRef}
        className={`peer-video ${peer.isLocal ? 'local' : ''}`}
        autoPlay
        muted
        playsInline
      />
      <div className='peer-name'>
        {peer.name} {peer.isLocal ? '(You)' : ''}
      </div>

      <Badge variant={audioOn ? 'default' : 'outline'}>
        {audioOn ? <Volume2 className='h-4 w-4' /> : <VolumeX className='h-4 w-4' />}
      </Badge>
    </div>
  );
};
