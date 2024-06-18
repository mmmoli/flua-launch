import assert from 'node:assert';

import { db } from '@shared/services/db';
import { cache } from 'react';

export interface GetRoomsParams {
  ownerId: string;
}

export const getRoomsForUser = cache(async ({ ownerId }: GetRoomsParams) => {
  assert(typeof ownerId === typeof String(), 'ownerId must be a string');
  try {
    const rooms = await db.query.rooms.findMany({
      where: (room, { eq }) => eq(room.ownerId, ownerId),
    });

    return rooms;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get Rooms for user');
  }
});
