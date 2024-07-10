'use server';

import { UserId } from '@shared/services/auth/client';
import { db, eq, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { cache } from 'react';

export interface GetRoomsForUserParams {
  userId: UserId;
}

export const getRoomsForUser = cache(async ({ userId }: GetRoomsForUserParams) => {
  try {
    const room = await db.query.rooms.findMany({
      where: eq(schema.rooms.ownerId, userId),
    });
    return room;
  } catch (e) {
    logger.error(e);
    throw new Error(`Failed to get room for user: ${userId}`);
  }
});
