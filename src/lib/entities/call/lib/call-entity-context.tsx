'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

export interface CallEntityContext {
  roomCode: string | undefined;
  displayName: string | undefined;
}

export const Context = createContext<
  [CallEntityContext, Dispatch<SetStateAction<CallEntityContext>>]
>([{ roomCode: undefined, displayName: undefined }, () => {}]);
