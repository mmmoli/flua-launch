import { cn } from '@ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';

interface FrameConfig {
  variant: {
    default: string;
    primary: string;
  };
  visibility: {
    visible: string;
    hidden: string;
  };
}

export const frameVariants = cva(
  'pointer-events-none transition-opacity transition-colors fixed left-0 top-0 h-full w-full border-8',
  {
    variants: {
      variant: {
        primary: 'border-primary',
        default: 'border-secondary',
      },
      visibility: {
        visible: 'opacity-100',
        hidden: 'opacity-0 pointer-events-none',
      },
    } satisfies FrameConfig,
    defaultVariants: {
      variant: 'default',
      visibility: 'visible',
    },
  }
);

const labelVariants = cva(
  'absolute -top-2 left-1/2 transition-opacity -translate-x-1/2 transition-colors transform rounded-sm px-3 py-1 text-primary-foreground',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        default: 'bg-secondary',
      },
      visibility: {
        visible: 'opacity-100',
        hidden: 'opacity-0 pointer-events-none',
      },
    } satisfies FrameConfig,
    defaultVariants: {
      variant: 'default',
      visibility: 'visible',
    },
  }
);

export interface FrameProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof frameVariants> {
  label: ReactNode;
}

export const Frame = forwardRef<HTMLDivElement, FrameProps>(
  ({ variant, visibility, className, label, ...props }, ref) => {
    return (
      <div className={cn(frameVariants({ variant, visibility, className }))} ref={ref} {...props}>
        <div className={cn(labelVariants({ variant, visibility, className }))}>{label}</div>
      </div>
    );
  }
);
Frame.displayName = 'Frame';
