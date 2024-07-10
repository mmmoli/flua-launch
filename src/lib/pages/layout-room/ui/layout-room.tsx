import { FC, ReactNode } from 'react';

import { assertUser } from '@/lib/shared/services/auth/api';

export interface LayoutRoomProps {
  children: ReactNode;
}

export const LayoutRoom: FC<LayoutRoomProps> = async ({ children }) => {
  await assertUser();
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <main>{children}</main>
    </div>
  );
};
