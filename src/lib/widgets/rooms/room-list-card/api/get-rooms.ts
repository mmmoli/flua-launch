import assert from 'node:assert';

import { db } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { cache } from 'react';
import { Fail, Ok, Result } from 'rich-domain';

import { RoomModel } from '@/lib/entities/room';

type OrderByParams = '-name' | 'name' | '-createdAt' | 'createdAt';

export interface GetRoomsParams {
  ownerId: string;
  orderBy?: OrderByParams;
}

export const getRoomsForUser = cache(
  async ({ ownerId, orderBy = '-name' }: GetRoomsParams): Promise<Result<RoomModel[]>> => {
    assert(typeof ownerId === typeof String(), 'ownerId must be a string');
    try {
      const rooms = await db.query.rooms.findMany({
        where: (room, { eq }) => eq(room.ownerId, ownerId),
        orderBy: (posts, { asc, desc }) => {
          switch (orderBy) {
            case '-name':
              return [desc(posts.name)];
            case 'name':
              return [asc(posts.name)];
            case '-createdAt':
              return [desc(posts.createdAt)];
            case 'createdAt':
              return [asc(posts.createdAt)];
          }
        },
      });

      return Ok(rooms);
    } catch (error) {
      logger.error(error);
      return Fail('Failed to get Rooms for user');
    }
  }
);
