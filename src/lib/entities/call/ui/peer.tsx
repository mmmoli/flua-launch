'use client';

import { useVideo } from '@100mslive/react-sdk';
import { FC } from 'react';

import { Peer as IPeer } from '../model';

export interface PeerProps {
  peer: IPeer;
}

export const Peer: FC<PeerProps> = ({ peer }) => {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });

  return (
    <div>
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
