import { env } from '@shared/config/env';
import { Receiver } from '@upstash/qstash';

export const receiver = new Receiver({
  currentSigningKey: env.QSTASH_NEXT_SIGNING_KEY,
  nextSigningKey: env.QSTASH_NEXT_SIGNING_KEY,
});
