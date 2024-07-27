import { env } from '@shared/config/env';
import { Resend } from 'resend';

import { DummyTransactionalEmailService } from './dummy-client';
import { ResendTransactionalEmailService } from './resend-client';

export const transactionalEmailService =
  env.EMAIL_PROVIDER === 'resend'
    ? new ResendTransactionalEmailService({
        client: new Resend(env.RESEND_KEY),
      })
    : new DummyTransactionalEmailService();
