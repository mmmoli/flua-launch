import { env } from '@shared/config/env';
import { logger } from '@shared/services/logger';
import type { Resend } from 'resend';
import { Fail, IResult, Ok } from 'rich-domain';

import { SendEmailProps, TransactionalEmailServiceTrait } from '../lib/transactional-types';

export interface ResendTransactionalEmailServiceDeps {
  client: Resend;
}

export class ResendTransactionalEmailService implements TransactionalEmailServiceTrait {
  constructor(protected readonly deps: ResendTransactionalEmailServiceDeps) {}

  async send(input: SendEmailProps): Promise<IResult<void>> {
    try {
      if (env.VERCEL_ENV === 'development') {
        logger.log('Skipping email send in development');
        return Ok();
      }

      const { error } = await this.deps.client.emails.send({
        ...input,
        from: env.EMAIL_FROM,
      });

      if (error) throw new Error(error.message);
      return Ok();
    } catch (err) {
      logger.error(err);
      return Fail((err as Error).message);
    }
  }
}
