import { sql } from 'drizzle-orm';
import { blob, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { users } from './auth-schema';

export const customers = sqliteTable('customer', {
  id: text('id')
    .references(() => users.id)
    .notNull()
    .primaryKey(),
  stripeCustomerId: text('stripe_customer_id').notNull().unique(),
});

export type CustomerModel = typeof customers.$inferSelect;
export type InsertCustomerModel = typeof customers.$inferInsert;

export const subscriptionStatus = text('subscription_status', [
  'trialing',
  'active',
  'canceled',
  'incomplete',
  'incomplete_expired',
  'past_due',
  'unpaid',
  'paused',
]);

export const subscriptions = sqliteTable('subscriptions', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .references(() => users.id)
    .notNull(),
  status: subscriptionStatus,
  createdAt: text('created_at')
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text('updated_at')
    .notNull()
    .$onUpdate(() => sql`(current_timestamp)`),
  metadata: blob('metadata'),
});

export type SubscriptionModel = typeof subscriptions.$inferSelect;
export type InsertSubscriptionModel = typeof subscriptions.$inferInsert;
