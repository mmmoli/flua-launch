import { env } from '@shared/config/env';
import { verifySignatureAppRouter } from '@upstash/qstash/nextjs';

export const verify = (handler: (request: Request) => any) =>
  verifySignatureAppRouter(handler, {
    currentSigningKey: env.QSTASH_CURRENT_SIGNING_KEY,
    nextSigningKey: env.QSTASH_NEXT_SIGNING_KEY,
  });
