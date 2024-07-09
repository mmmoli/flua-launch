import { assertUser } from '@/lib/shared/services/auth/api';
import { FC, ReactNode } from 'react';

export interface LayoutRoomProps {
  children: ReactNode;
}

export const LayoutRoom: FC<LayoutRoomProps> = async ({ children }) => {
  await assertUser();
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <main className='grid items-start gap-4 sm:py-0 md:items-center md:gap-8'>{children}</main>
    </div>
  );
};
