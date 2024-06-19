import assert from 'node:assert';

import { db } from '@shared/services/db';
import { cache } from 'react';
import { Fail, Ok } from 'rich-domain';

import { RoomModel } from '@/lib/entities/room';

export interface GetRoomsParams {
  ownerId: string;
}

function sleeper<T>(ms: number) {
  return function (x: T) {
    return new Promise<T>((resolve) => setTimeout(() => resolve(x), ms));
  };
}

export const getRoomsForUser = cache(async ({ ownerId }: GetRoomsParams) => {
  assert(typeof ownerId === typeof String(), 'ownerId must be a string');
  try {
    const rooms = await db.query.rooms
      .findMany({
        where: (room, { eq }) => eq(room.ownerId, ownerId),
      })
      .then(sleeper<RoomModel[]>(3 * 1000));

    return Ok(rooms);
  } catch (error) {
    console.error(error);
    return Fail('Failed to get Rooms for user');
  }
});
