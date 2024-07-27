import { Person, usePositionInSpeakingQueue } from '@entities/speaking-queue';
import { Frame } from '@ui/frame';
import { FC, useCallback } from 'react';

export interface IsSpeakerFrameProps {
  user: Person;
}

export const IsSpeakerFrame: FC<IsSpeakerFrameProps> = ({ user }) => {
  const position = usePositionInSpeakingQueue({ user });

  return (
    <Frame
      variant={position === 1 ? 'primary' : 'default'}
      visibility={position ? 'visible' : 'hidden'}
      label={
        <span className='text-sm'>
          <span className='font-bold'>Queued to Speak</span>. Position: #{position}
        </span>
      }
    />
  );
};
