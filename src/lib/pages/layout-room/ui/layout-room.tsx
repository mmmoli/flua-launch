import { FC, ReactNode } from 'react';

export interface LayoutRoomProps {
  children: ReactNode;
}

export const LayoutRoom: FC<LayoutRoomProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <main className='grid h-full flex-1 items-start gap-4 sm:py-0 md:items-center md:gap-8'>
        {children}
      </main>
    </div>
  );
};
