import { FC, ReactNode, useState } from 'react';

import { getRoomBySlug } from '../api/get-room-by-slug';
import { Context, RoomEntityContext } from '../lib/room-entity-context';
import { RoomModel, RoomModelSlug } from '../lib/types';

export * from './room-name';

export interface RoomEntityProps {
  slug: RoomModelSlug;
  children: (room: RoomModel) => ReactNode;
}

export const RoomEntity: FC<RoomEntityProps> = async ({ slug, children }) => {
  const room = await getRoomBySlug({
    slug,
  });

  if (!room) throw new Error('Room Not Found');

  const [store, set] = useState<RoomEntityContext>({
    room,
  });

  return <Context.Provider value={[store, set]}>{children(room)}</Context.Provider>;
};
