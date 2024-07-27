import { Button, Heading, Html } from '@react-email/components';
import { FC } from 'react';

export interface WelcomeUserProps {
  name: string;
}

export const WelcomeUser: FC<WelcomeUserProps> = ({ name }) => {
  return (
    <Html>
      <Heading>Hi {name}!</Heading>
      <Button
        href='https://example.com'
        style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
      >
        Click me
      </Button>
    </Html>
  );
};
