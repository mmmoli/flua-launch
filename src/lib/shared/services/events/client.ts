import { env } from '@shared/config/env';
import { Client } from '@upstash/qstash';

export const client = new Client({ token: env.UPSTASH_QSTASH_TOKEN });
