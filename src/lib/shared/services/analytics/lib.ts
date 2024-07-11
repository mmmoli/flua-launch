import { env } from '@shared/config/env';

import { AnalyicsProviderProps } from './nextjs';

export const config: AnalyicsProviderProps = {
  domain: env.VERCEL_URL ?? 'http://localhost:3000',
  enabled: env.NEXT_PUBLIC_ANALYTICS_ENABLED,
  trackLocalhost: false,
};
