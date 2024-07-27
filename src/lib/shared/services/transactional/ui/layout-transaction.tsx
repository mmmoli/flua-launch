import { Heading } from '@react-email/components';
import { FC, ReactNode } from 'react';

import { BaseEmail } from './base';

export const LayoutTransaction: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <BaseEmail>
      <Heading>transcaction</Heading>
      {children}
    </BaseEmail>
  );
};
