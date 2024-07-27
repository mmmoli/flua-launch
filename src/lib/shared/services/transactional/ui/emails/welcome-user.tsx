import { Button, Heading } from '@react-email/components';

import { LayoutTransaction } from '../layout-transaction';

export interface WelcomeUserProps {
  user: {
    name: string;
    avatarUrl: string;
  };
}

export const WelcomeUser = ({ user }: WelcomeUserProps) => {
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

export default WelcomeUser;

WelcomeUser.PreviewProps = {
  user: { name: 'Michele', avatarUrl: 'https://picsum.photos/id/237/80/80' },
} satisfies WelcomeUserProps;
