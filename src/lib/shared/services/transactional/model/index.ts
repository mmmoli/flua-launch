import { Novu } from '@novu/node';
import { env } from '@shared/config/env';
import { logger } from '@shared/services/logger';

import { DummyTransactionalNotificationService } from './dummy-client';
import { NouvTransactionalNotificationService } from './novu-client';

export const notificationService =
  env.NOTIFICATION_PROVIDER === 'novu'
    ? new NouvTransactionalNotificationService({
        client: new Novu(env.NOVU_SECRET_KEY, { apiKey: env.NOVU_API_ID }),
        logger,
      })
    : new DummyTransactionalNotificationService({ logger });
