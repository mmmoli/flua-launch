'use server';

import { db } from '@shared/services/db';
import { cache } from 'react';

import { RoomModelSlug } from '../lib/types';

export interface GetRoomBySlugParams {
  slug: RoomModelSlug;
}

export const getRoomBySlug = cache(async ({ slug }: GetRoomBySlugParams) => {
  try {
    const room = await db.query.rooms.findFirst({
      where: (room, { eq }) => eq(room.slug, slug),
    });
    return room;
  } catch (e) {
    console.error(e);
    throw new Error(`Failed to get room for slug: ${slug}`);
  }
});
