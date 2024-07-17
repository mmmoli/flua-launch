import { Person, usePositionInSpeakingQueue } from '@entities/speaking-queue';
import { cn } from '@shared/design-system/utils';
import { Frame } from '@ui/frame';
import { FC, useCallback } from 'react';

export interface IsSpeakerFrameProps {
  user: Person;
}

export const IsSpeakerFrame: FC<IsSpeakerFrameProps> = ({ user }) => {
  const position = usePositionInSpeakingQueue({ user });
  if (!position) return null;
  return (
    <Frame
      label={
        <span className='text-sm'>
          <span className='font-bold'>In Speaking Queue</span>. Position: #{position}
        </span>
      }
    />
  );
};
