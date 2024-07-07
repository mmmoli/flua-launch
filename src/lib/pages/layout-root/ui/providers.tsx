'use client';

import { SessionProvider } from '@shared/services/auth/client';
import { TooltipProvider } from '@ui/tooltip';
import { FC, ReactNode, useState } from 'react';

export interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  );
};
