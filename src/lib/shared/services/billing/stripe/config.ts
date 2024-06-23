import { env } from '@shared/config/env';
import Stripe from 'stripe';

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  // https://stripe.com/docs/api/versioning
  // @ts-ignore
  apiVersion: '2024-04-10',
  // Register this as an official Stripe plugin.
  // https://stripe.com/docs/building-plugins#setappinfo
  appInfo: {
    name: 'Flua',
    version: env.VERCEL_GIT_COMMIT_SHA,
    url: env.VERCEL_URL,
  },
  telemetry: false,
});
