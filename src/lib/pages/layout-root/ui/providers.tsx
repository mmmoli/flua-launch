'use client';

import { AnalyticsProvider } from '@shared/services/analytics/nextjs';
import { SessionProvider } from '@shared/services/auth/client';
import { Toaster } from '@ui/sonner';
import { TooltipProvider } from '@ui/tooltip';
import { FC, ReactNode, useState } from 'react';

export interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <SessionProvider>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </SessionProvider>
      <AnalyticsProvider />
    </>
  );
};
