import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { users } from './auth-schema';

export const customers = sqliteTable('customer', {
  id: text('id')
    .references(() => users.id)
    .notNull()
    .primaryKey(),
  stripeCustomerId: text('stripe_customer_id').notNull(),
});

export type CustomerModel = typeof customers.$inferSelect;
export type InsertCustomerModel = typeof customers.$inferInsert;
