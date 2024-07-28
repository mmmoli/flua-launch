import { Button, Heading, renderAsync } from '@react-email/components';
import { FC } from 'react';
import { z } from 'zod';

import { LayoutTransaction } from '../layout-transaction';

export const WelcomeUserSchema = z.object({
  user: z.object({
    name: z.string().default('Room Name'),
  }),
});

export type WelcomeUserProps = z.infer<typeof WelcomeUserSchema>;

export const WelcomeUser: FC<WelcomeUserProps> = ({ user }) => {
  const preview = `Hi ${user.name}!`;
  return (
    <LayoutTransaction preview={preview}>
      <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
        Hi {user.name}!
      </Heading>
      <Button
        href='https://example.com'
        style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
      >
        Click me
      </Button>
    </LayoutTransaction>
  );
};

export async function render(props: WelcomeUserProps) {
  return renderAsync(<WelcomeUser {...props} />);
}
