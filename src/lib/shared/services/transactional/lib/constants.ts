import { env } from '@shared/config/env';

export const baseUrl = env.VERCEL_URL ? `https://${env.VERCEL_URL}` : '';
