'use server';

import { db } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { cache } from 'react';
import { Fail, IResult, Ok } from 'rich-domain';

import { RoomModel, RoomModelSlug } from '../lib/types';

export interface GetRoomBySlugParams {
  slug: RoomModelSlug;
}

export const getRoomBySlug = cache(
  async ({ slug }: GetRoomBySlugParams): Promise<IResult<RoomModel>> => {
    try {
      const room = await db.query.rooms.findFirst({
        where: (room, { eq }) => eq(room.slug, slug),
      });
      if (!room) return Fail(`Room not found for slug: ${slug}`);
      return Ok(room as RoomModel);
    } catch (e) {
      logger.error(e);
      return Fail(`Failed to get room for slug: ${slug}`);
    }
  }
);
