import { Slot, SlotProps } from '@radix-ui/react-slot';
import { FC, useContext } from 'react';

import { Context } from '../lib/room-entity-context';

export const RoomName: FC<SlotProps> = (props) => {
  const [{ room }, _] = useContext(Context);
  if (!room) throw new Error(`No room found. Did you forget to wrap in <RoomEntity />?`);
  return <Slot {...props}>{room?.name}</Slot>;
};
