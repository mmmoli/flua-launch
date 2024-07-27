import { eq, sql } from 'drizzle-orm';

import { db } from './db';
import { subscriptions } from './schema';

export const preparedSubscriptionStatus = db
  .select({
    status: subscriptions.status,
  })
  .from(subscriptions)
  .where(eq(subscriptions.userId, sql.placeholder('userId')))
  .prepare();
