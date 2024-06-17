import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';

import { Masthead } from './masthead';

export interface LayoutPublicProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Decent Next.js Starter Template',
  description: 'Quickly start a new Next.js project with common tools and configurations.',
};

export const LayoutPublic: FC<LayoutPublicProps> = ({ children }) => {
  return (
    <main className='container max-w-5xl grow px-4 py-4 sm:px-8'>
      <Masthead />
      {children}
    </main>
  );
};
