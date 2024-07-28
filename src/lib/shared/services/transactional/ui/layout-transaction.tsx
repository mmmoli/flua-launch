import { Container, Heading } from '@react-email/components';
import { FC, ReactNode } from 'react';

import { BaseEmail } from './base';

export const LayoutTransaction: FC<{ children?: ReactNode; preview: string }> = ({
  children,
  preview,
}) => {
  return (
    <BaseEmail preview={preview}>
      <Container className='mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
        {children}
      </Container>
    </BaseEmail>
  );
};
