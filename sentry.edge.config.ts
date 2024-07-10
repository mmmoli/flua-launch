import { init } from '@sentry/nextjs';
import { env } from '@shared/config/env';

// https://docs.sentry.io/platforms/javascript/guides/nextjs/
init({
  dsn: env.SENTRY_DSN,
  environment: env.VERCEL_GIT_COMMIT_REF,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  debug: env.SENTRY_DEBUG,
});
