'use server';

import { db } from '@shared/services/db';
import { cache } from 'react';
import { Fail, Ok, Result } from 'rich-domain';

import { RoomModel, RoomModelSlug } from '../lib/types';

export interface GetRoomBySlugParams {
  slug: RoomModelSlug;
}

export const getRoomBySlug = cache(
  async ({ slug }: GetRoomBySlugParams): Promise<Result<RoomModel>> => {
    try {
      console.log('getRoomBySlug');
      const room = await db.query.rooms.findFirst({
        where: (room, { eq }) => eq(room.slug, slug),
      });
      if (!room) return Fail(`Room not found for slug: ${slug}`);
      return Ok(room as RoomModel);
    } catch (e) {
      console.error(e);
      return Fail(`Failed to get room for slug: ${slug}`);
    }
  }
);
