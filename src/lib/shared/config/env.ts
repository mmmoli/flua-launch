import { vercel } from '@t3-oss/env-core/presets';
import { createEnv } from '@t3-oss/env-nextjs';
import { boolean } from 'boolean';
import { z } from 'zod';

const zParsedBoolean = z
  .string()
  .transform((v) => boolean(v))
  .optional()
  .default('false');

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DATABASE_AUTH_TOKEN: z.string().optional(),
    DATABASE_DEBUG: zParsedBoolean,
    SITE_DOMAIN: z.string().optional(),
    WARM: z.number().optional().default(0),
    AUTH_SECRET: z.string().optional().default(''),
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
    AUTH_DEBUG: zParsedBoolean,
    SENTRY_DSN: z.string().optional(),
    SENTRY_DEBUG: zParsedBoolean,
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
    HMS_WEBHOOK_SECRET: z.string(),
    HMS_ACCESS_KEY: z.string(),
    HMS_SECRET: z.string(),
    LIVEBLOCK_SECRET_KEY: z.string(),
  },

  client: {
    // sst.config.ts will set these based on SENTRY_* variables, so no need to
    // duplicate them in the .env files
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    NEXT_PUBLIC_SENTRY_DEBUG: zParsedBoolean,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_LIVEBLOCK_PUBLIC_KEY: z.string(),
    NEXT_PUBLIC_ANALYTICS_ENABLED: zParsedBoolean,
    NEXT_PUBLIC_SITE_DOMAIN: z.string().url(),
    NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID: z.string(),
    NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID: z.string(),
    NEXT_PUBLIC_LOGGER_IMPLEMENTATION: z.enum(['sentry', 'console']).optional().default('console'),
  },

  // client side variables for Next.js 14+
  experimental__runtimeEnv: {
    NEXT_PUBLIC_LOGGER_IMPLEMENTATION: process.env.NEXT_PUBLIC_LOGGER_IMPLEMENTATION,
    NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID: process.env.NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID,
    NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID,
    NEXT_PUBLIC_SITE_DOMAIN:
      process.env.NEXT_PUBLIC_SITE_DOMAIN ?? process.env.VERCEL_URL ?? 'http://localhost:3000',
    NEXT_PUBLIC_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
    NEXT_PUBLIC_LIVEBLOCK_PUBLIC_KEY: process.env.NEXT_PUBLIC_LIVEBLOCK_PUBLIC_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_DEBUG: process.env.NEXT_PUBLIC_SENTRY_DEBUG,
  },

  emptyStringAsUndefined: true,
  extends: [vercel()],
});
