import { logger } from '@shared/services/logger';
import { IResult, Ok } from 'rich-domain';

import { SendEmailProps, TransactionalEmailServiceTrait } from '../lib/transactional-types';

export class DummyTransactionalEmailService implements TransactionalEmailServiceTrait {
  async send({ react, ...rest }: SendEmailProps): Promise<IResult<void>> {
    logger.log(`Sending Dummy email: ${JSON.stringify(rest, null, 2)}`);
    return Ok();
  }
}
