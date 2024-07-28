import { User } from '@shared/services/auth/client';
import { IResult } from 'rich-domain';

export type WorkflowId = 'on-room-created' | 'on-user-created';

export type Property = 'string' | 'number' | 'boolean' | Record<string, unknown>;

export type To = Partial<User> & Pick<User, 'id'>;

export interface TriggerParams {
  to: To;
  payload: Record<string, Property>;
}

export interface TransactionalNotificationServiceTrait {
  trigger(workflow: WorkflowId, params: TriggerParams): Promise<IResult<void>>;
}
