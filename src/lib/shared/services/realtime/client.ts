import { createClient } from '@liveblocks/client';
import { env } from '@shared/config/env';

export const client = createClient({
  publicApiKey: env.NEXT_PUBLIC_LIVEBLOCK_PUBLIC_KEY,
});
