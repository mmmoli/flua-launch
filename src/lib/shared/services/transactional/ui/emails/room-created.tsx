import { Button, Heading } from '@react-email/components';

import { LayoutTransaction } from '../layout-transaction';

export interface RoomCreatedProps {
  room: {
    name: string;
    url: string;
    code: string;
  };
  user: {
    name: string;
  };
}

export const RoomCreated = ({ user, room }: RoomCreatedProps) => {
  const preview = `Your Room is ready`;
  return (
    <LayoutTransaction preview={preview}>
      <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
        <strong>{room.name}</strong> is ready for meetings
      </Heading>
    </LayoutTransaction>
  );
};

export default RoomCreated;

RoomCreated.PreviewProps = {
  user: { name: 'Michele' },
  room: { name: 'My New Room', url: 'https://example.com', code: 'abd-234-kho' },
} satisfies RoomCreatedProps;
