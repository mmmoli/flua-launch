'use server';

import { db } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { cache } from 'react';
import { Fail, IResult, Ok } from 'rich-domain';

import { RoomModel, RoomModelExternalId } from '../lib/types';

export interface GetRoomByExternalIdParams {
  externalId: RoomModelExternalId;
}

export const getRoomByExternalId = cache(
  async ({ externalId }: GetRoomByExternalIdParams): Promise<IResult<RoomModel>> => {
    try {
      const room = await db.query.rooms.findFirst({
        where: (room, { eq }) => eq(room.externalId, externalId),
      });
      if (!room) return Fail(`Room not found for externalId: ${externalId}`);
      return Ok(room as RoomModel);
    } catch (e) {
      logger.error(e);
      return Fail(`Failed to get room for externalId: ${externalId}`);
    }
  }
);
