import { AccountUpsellBanner } from '@features/auth/account-upsell';
import { FC, ReactNode } from 'react';

export interface LayoutRoomProps {
  children: ReactNode;
}

export const LayoutRoom: FC<LayoutRoomProps> = async ({ children }) => {
  return (
    <div className='relative flex max-h-screen w-full flex-col bg-muted/40'>
      <AccountUpsellBanner className='absolute w-full' />
      <main className='flex-grow'>{children}</main>
    </div>
  );
};
