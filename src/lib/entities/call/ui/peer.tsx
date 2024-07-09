'use client';

import { useVideo } from '@100mslive/react-sdk';
import { ComponentPropsWithoutRef, FC } from 'react';

import { PeerModel } from '../model';

export interface PeerProps extends ComponentPropsWithoutRef<'div'> {
  peer: PeerModel;
}

export const Peer: FC<PeerProps> = ({ peer, ...props }) => {
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
    </div>
  );
};
