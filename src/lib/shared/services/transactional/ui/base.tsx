import { Body, Head, Html, Preview, Tailwind } from '@react-email/components';
import { FC, ReactNode } from 'react';

export const BaseEmail: FC<{ children?: ReactNode; preview: string }> = ({ children, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className='mx-auto my-auto bg-white px-2 font-sans'>{children}</Body>
      </Tailwind>
    </Html>
  );
};
