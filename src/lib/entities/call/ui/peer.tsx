'use client';

import { useVideo } from '@100mslive/react-sdk';
import { Badge } from '@ui/badge';
import { Volume, VolumeX } from 'lucide-react';
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
      {audioOn ? (
        <Badge variant='outline'>
          <VolumeX className='h-4 w-4' />
        </Badge>
      ) : (
        <Badge>
          <Volume className='h-4 w-4' />
        </Badge>
      )}
    </div>
  );
};
