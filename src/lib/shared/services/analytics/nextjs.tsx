import PlausibleProvider from 'next-plausible';
import { FC, ReactNode } from 'react';

import * as props from './lib';

export const AnalyticsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <PlausibleProvider {...props}>{children}</PlausibleProvider>;
};
