import assert from 'node:assert';

import { db } from '@shared/services/db';
import { cache } from 'react';
import { Fail, Ok } from 'rich-domain';

export interface GetRoomsParams {
  ownerId: string;
}

export const getRoomsForUser = cache(async ({ ownerId }: GetRoomsParams) => {
  assert(typeof ownerId === typeof String(), 'ownerId must be a string');
  try {
    const rooms = await db.query.rooms.findMany({
      where: (room, { eq }) => eq(room.ownerId, ownerId),
    });

    return Ok(rooms);
  } catch (error) {
    console.error(error);
    return Fail('Failed to get Rooms for user');
  }
});
