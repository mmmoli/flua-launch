import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import { Header } from './header';
import { SideNav } from './sidenav';

export interface LayoutAppProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Flua',
};

export const LayoutApp: FC<LayoutAppProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <SideNav />
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <Header />
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
          {children}
        </main>
      </div>
    </div>
  );
};
