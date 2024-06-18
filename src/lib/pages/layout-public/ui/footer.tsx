import { FC } from 'react';

const year = new Date().getFullYear();

export const Footer: FC = () => {
  return (
    <footer className='prose-sm'>
      <p className='text-muted-foreground'>Copyright &copy; {year} Flua. All rights reserved.</p>
    </footer>
  );
};
