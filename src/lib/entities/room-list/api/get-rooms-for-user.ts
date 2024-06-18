'use server';

import { User } from '@shared/services/auth';
import { db } from '@shared/services/db';
import { cache } from 'react';

export interface GetRoomsForUserParams {
  userId: User;
}

export const getRoomsForUser = cache(async ({ userId }: GetRoomsForUserParams) => {
  try {
    const room = await db.query.rooms.findMany({
      where: (room, { eq }) => eq(room.ownerId, userId),
    });
    return room;
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to get room for slug: ${slug}`);
  }
});
