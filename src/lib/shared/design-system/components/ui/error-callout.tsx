import { Alert, AlertDescription, AlertTitle } from '@ui/alert';
import { cn } from '@ui/utils';
import { AlertCircle } from 'lucide-react';
import { FC, ReactNode } from 'react';

export interface ErrorCalloutProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const ErrorCallout: FC<ErrorCalloutProps> = ({ children, className, title = 'Error' }) => {
  return (
    <Alert variant='destructive' className='bg-red-50'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle className='pb-2'>{title}</AlertTitle>
      <AlertDescription>
        <div className={cn('text-destructive', className)}>{children}</div>
      </AlertDescription>
    </Alert>
  );
};
