import { Button, Heading } from '@react-email/components';

import { LayoutTransaction } from '../layout-transaction';

// import { LayoutTransaction } from '../layout-transaction';

export interface WelcomeUserProps {
  name: string;
}

export const WelcomeUser = ({ name }: WelcomeUserProps) => {
  return (
    <LayoutTransaction>
      <Heading>Hi {name}!</Heading>
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
  name: 'Michele',
} satisfies WelcomeUserProps;
