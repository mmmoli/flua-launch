'use server';

import { RoomModel } from '@entities/room';
import { User } from '@shared/services/auth/client';
import { db } from '@shared/services/db';
import { roomTiers } from '@shared/services/db/schema';
import { logger } from '@shared/services/logger';
import { cache } from 'react';
import { Fail, IResult, Ok } from 'rich-domain';

export interface GetFreeRoomForUserParams {
  userId: NonNullable<User['id']>;
}

export const getFreeRoomForUser = cache(
  async ({ userId }: GetFreeRoomForUserParams): Promise<IResult<RoomModel>> => {
    try {
      const room = await db.query.rooms.findFirst({
        where: (room, { eq, and }) => and(eq(room.ownerId, userId), eq(room.tier, roomTiers[0])),
      });
      if (!room) return Fail(`Free Room not found for userId: ${userId}`);
      return Ok(room as RoomModel);
    } catch (e) {
      logger.error(e);
      return Fail(`Failed to get Free Room for userId: ${userId}`);
    }
  }
);
