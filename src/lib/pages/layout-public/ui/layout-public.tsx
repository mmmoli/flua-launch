import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import { Footer } from './footer';
import { PublicMasthead } from './public-masthead';

export interface LayoutPublicProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Decent Next.js Starter Template',
  description: 'Quickly start a new Next.js project with common tools and configurations.',
};

export const LayoutPublic: FC<LayoutPublicProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <PublicMasthead />
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
        {children}
        <Footer />
      </main>
    </div>
  );
};
