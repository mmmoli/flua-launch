'use client';

import { FC, useState } from 'react';

import { Context, RoomEntityContext } from '../lib/room-entity-context';
import { RoomModel } from '../lib/types';

export * from './room-name';

export interface RoomEntityProviderProps {
  room: RoomModel;
  children?: (room: RoomModel) => JSX.Element;
}

export const RoomEntityProvider: FC<RoomEntityProviderProps> = ({ room, children }) => {
  const [store, set] = useState<RoomEntityContext>({
    room,
  });
  return <Context.Provider value={[store, set]}>{children?.(room)}</Context.Provider>;
};
