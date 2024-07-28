import { db, eq, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { Fail, Ok, Result } from 'rich-domain';

export interface CreateSubscriptionParams {
  subscriptionId: string;
  customerId: string;
  status: string;
}

export const createSubscription = async (data: CreateSubscriptionParams): Promise<Result<void>> => {
  try {
    const user = await db.query.customers.findFirst({
      where: eq(schema.customers.stripeCustomerId, data.customerId),
    });

    if (!user) return Fail('Create Subscription Failed. No user found.');

    await db.insert(schema.subscriptions).values({
      id: data.subscriptionId,
      status: data.status,
      userId: user.id,
    });

    return Ok();
  } catch (e) {
    logger.error(e);
    return Fail('Create Subscription Failed');
  }
};
