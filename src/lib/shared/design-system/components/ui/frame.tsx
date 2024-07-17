import { FC, ReactNode } from 'react';

export interface FrameProps {
  label?: ReactNode;
}

export const Frame: FC<FrameProps> = ({ label }) => {
  return (
    <div className='pointer-events-none fixed left-0 top-0 h-full w-full border-8 border-primary'>
      <div className='absolute -top-2 left-1/2 -translate-x-1/2 transform rounded-sm bg-primary px-3 py-1 text-primary-foreground'>
        {label}
      </div>
    </div>
  );
};
