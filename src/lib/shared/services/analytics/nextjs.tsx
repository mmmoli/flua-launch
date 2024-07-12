import PlausibleProvider, { usePlausible } from 'next-plausible';
import { FC } from 'react';

import { config } from './lib';

export type AnalyicsProviderProps = Parameters<typeof PlausibleProvider>[0];

export const AnalyticsProvider: FC<Partial<AnalyicsProviderProps>> = ({ children, ...props }) => {
  return <PlausibleProvider {...config} {...props} />;
};

export const useAnalytics = usePlausible;
