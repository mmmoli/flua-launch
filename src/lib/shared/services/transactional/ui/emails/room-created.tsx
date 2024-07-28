import { Heading, renderAsync } from '@react-email/components';
import { z } from 'zod';

import { LayoutTransaction } from '../layout-transaction';

export const RoomCreatedSchema = z.object({
  room: z.object({
    name: z.string().default('Room Name'),
  }),
});

export type RoomCreatedProps = z.infer<typeof RoomCreatedSchema>;

export const RoomCreated = ({ room }: RoomCreatedProps) => {
  const preview = `Your Room is ready`;
  return (
    <LayoutTransaction preview={preview}>
      <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
        <strong>{room.name}</strong> is ready for meetings
      </Heading>
    </LayoutTransaction>
  );
};

export async function render(props: RoomCreatedProps) {
  return renderAsync(<RoomCreated {...props} />);
}
