import { ISubscriberPayload, Novu } from '@novu/node';
import { Logger } from '@shared/services/logger';
import { Fail, IResult, Ok } from 'rich-domain';

import {
  TransactionalNotificationServiceTrait,
  TriggerParams,
  WorkflowId,
} from '../lib/transactional-types';

export interface NouvTransactionalNotificationServiceDeps {
  client: Novu;
  logger: Logger;
}

export class NouvTransactionalNotificationService implements TransactionalNotificationServiceTrait {
  constructor(protected readonly deps: NouvTransactionalNotificationServiceDeps) {}

  async trigger(workflow: WorkflowId, params: TriggerParams): Promise<IResult<void>> {
    try {
      const response = await this.deps.client.trigger(workflow, {
        to: {
          subscriberId: params.to.id!,
          avatar: params.to.image ?? undefined,
          email: params.to.email ?? undefined,
        },
        payload: params.payload,
      });
      if (response.status < 200 || response.status >= 300)
        throw Error(`Failed to send notification: ${response.status} ${response.statusText}`);
      return Ok();
    } catch (err) {
      const e = err as Error;
      this.deps.logger.error(e);
      return Fail('Failed to send notification');
    }
  }
}
