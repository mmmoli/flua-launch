import { Html, Tailwind } from '@react-email/components';
import { FC, ReactNode } from 'react';

export const BaseEmail: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Tailwind>
      <Html>{children}</Html>
    </Tailwind>
  );
};
