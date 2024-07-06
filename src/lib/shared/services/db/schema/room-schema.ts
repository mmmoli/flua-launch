import { createId } from '@paralleldrive/cuid2';
import { relations, sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { users } from './auth-schema';

export const rooms = sqliteTable('room', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  createdAt: integer('createdAt', { mode: 'timestamp_ms' })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  ownerId: text('ownerId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  externalId: text('externalId').notNull().unique(),
});

export const roomsRelations = relations(rooms, ({ one }) => ({
  owner: one(users, {
    fields: [rooms.ownerId],
    references: [users.id],
  }),
}));

export type RoomModel = typeof rooms.$inferSelect;
export type InsertRoomModel = typeof rooms.$inferInsert;
