'use client';

import { AnalyticsProvider } from '@shared/services/analytics';
import { SessionProvider } from '@shared/services/auth/client';
import { Toaster } from '@ui/sonner';
import { TooltipProvider } from '@ui/tooltip';
import { FC, ReactNode, useState } from 'react';

export interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <AnalyticsProvider>
      <SessionProvider>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </SessionProvider>
    </AnalyticsProvider>
  );
};
