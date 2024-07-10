import { db, eq, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { Fail, Ok, Result } from 'rich-domain';

export interface UpdateSubscriptionParams {
  subscriptionId: string;
  customerId: string;
  status: string;
}

export const updateSubscription = async (data: UpdateSubscriptionParams): Promise<Result<void>> => {
  try {
    const user = await db.query.customers.findFirst({
      where: eq(schema.customers.stripeCustomerId, data.customerId),
    });

    if (!user) return Fail('Update Subscription Failed. No user found.');

    await db
      .update(schema.subscriptions)
      .set({
        status: data.status,
      })
      .where(eq(schema.subscriptions.id, data.subscriptionId));
    return Ok();
  } catch (e) {
    logger.error(e);
    return Fail('Update Subscription Failed');
  }
};
