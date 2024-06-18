import { FC, ReactNode } from 'react';

export interface BannerProps {
  title: ReactNode;
  children?: ReactNode;
}

export const Banner: FC<BannerProps> = ({ title, children }) => {
  return (
    <div className='flex items-center justify-between border-b border-foreground bg-background px-4 py-8'>
      <div>
        <h1 className='text-3xl font-bold'>{title}</h1>
      </div>
      {children ? <div className='flex space-x-2'>{children}</div> : null}
    </div>
  );
};
