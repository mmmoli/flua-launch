import { FC } from 'react';

export interface BannerProps {
  roomName: string;
}

export const Banner: FC<BannerProps> = ({ roomName }) => {
  return (
    <div className='p-4'>
      <h1 className='text-4xl font-bold tracking-tight'>{roomName}</h1>
    </div>
  );
};
