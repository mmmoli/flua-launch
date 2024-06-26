'use server';

import { FC } from 'react';

import { getRoomBySlug } from '../api/get-room-by-slug';
import { RoomModel, RoomModelSlug } from '../lib/types';

export interface RoomEntityProps {
  slug: RoomModelSlug;
  children?: (room: RoomModel) => JSX.Element;
}

export const RoomEntity: FC<RoomEntityProps> = async ({ slug, children }) => {
  const roomResult = await getRoomBySlug({
    slug,
  });

  if (roomResult.isFail()) throw new Error(roomResult.error());
  const room = roomResult.value();

  return children ? children(room) : null;
};
