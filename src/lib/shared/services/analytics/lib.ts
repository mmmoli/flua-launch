import { env } from '@shared/config/env';

export const domain = env.SITE_DOMAIN ?? env.VERCEL_URL!;
export const enabled = env.ANALYTICS_ENABLED;
export const trackLocalhost = enabled;
