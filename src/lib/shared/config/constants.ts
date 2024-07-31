import { env } from './env';

export const BASE_URL = env.SITE_DOMAIN ?? env.VERCEL_URL ?? 'http://localhost:3000';
