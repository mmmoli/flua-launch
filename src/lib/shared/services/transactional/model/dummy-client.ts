import type { Logger } from '@shared/services/logger';
import { IResult, Ok } from 'rich-domain';

import { TransactionalNotificationServiceTrait, WorkflowId } from '../lib/transactional-types';

export interface DummyTransactionalNotificationServiceDeps {
  logger: Logger;
}

export class DummyTransactionalNotificationService
  implements TransactionalNotificationServiceTrait
{
  constructor(protected readonly deps: DummyTransactionalNotificationServiceDeps) {}

  async trigger<T>(workflow: WorkflowId, payload: T): Promise<IResult<void>> {
    this.deps.logger.log(`Sending Dummy notification: ${JSON.stringify(payload, null, 2)}`);
    return Ok();
  }
}
