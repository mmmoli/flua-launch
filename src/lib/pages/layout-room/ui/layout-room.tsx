import { FC, ReactNode } from 'react';

import { UserMenu } from '@/lib/widgets/auth/user-menu';

export interface LayoutRoomProps {
  children: ReactNode;
}

export const LayoutRoom: FC<LayoutRoomProps> = async ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <div className='absolute right-8 top-4 flex gap-2'>
        <UserMenu signedOutCta='Sign Up FREE' />
      </div>
      <main>{children}</main>
    </div>
  );
};
