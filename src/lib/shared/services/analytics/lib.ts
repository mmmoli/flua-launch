import { env } from '@shared/config/env';

import { AnalyicsProviderProps } from './nextjs';

console.log(env.NEXT_PUBLIC_SITE_DOMAIN);
export const config: AnalyicsProviderProps = {
  domain: new URL(env.NEXT_PUBLIC_SITE_DOMAIN).host,
  enabled: env.NEXT_PUBLIC_ANALYTICS_ENABLED,
  trackLocalhost: true,
  trackOutboundLinks: true,
  trackFileDownloads: true,
};
