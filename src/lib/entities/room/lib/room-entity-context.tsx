import { createContext, Dispatch, SetStateAction } from 'react';

import { RoomModel } from './types';

export interface RoomEntityContext {
  room: RoomModel | undefined;
}

export const Context = createContext<
  [RoomEntityContext, Dispatch<SetStateAction<RoomEntityContext>>]
>([{ room: undefined }, () => {}]);
