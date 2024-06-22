'use server';

import { User } from '@shared/services/auth';
import { db, eq, schema } from '@shared/services/db';
import { cache } from 'react';

export interface GetRoomsForUserParams {
  userId: NonNullable<User['id']>;
}

export const getRoomsForUser = cache(async ({ userId }: GetRoomsForUserParams) => {
  try {
    const room = await db.query.rooms.findMany({
      where: eq(schema.rooms.ownerId, userId),
    });
    return room;
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to get room for user: ${userId}`);
  }
});
