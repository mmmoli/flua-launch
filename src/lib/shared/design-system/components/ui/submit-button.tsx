'use client';

import { forwardRef } from 'react';
import { useFormStatus } from 'react-dom';

import { Button, ButtonProps } from './button';

const SubmitButton = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  const { pending } = useFormStatus();
  return <Button ref={ref} {...props} disabled={pending} />;
});
SubmitButton.displayName = 'SubmitButton';

export { SubmitButton };
