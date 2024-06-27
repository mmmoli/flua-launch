import { cn } from '@shared/design-system/utils';
import Image from 'next/image';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { Testimonial } from '../lib/testimonial-type';

export interface TestimonialListCardProps extends ComponentPropsWithoutRef<'figure'> {
  testimonial: Testimonial;
}

export const TestimonialListCard: FC<TestimonialListCardProps> = ({
  testimonial: {
    quote,
    author: { avatarUrl, name },
  },
  className,
}) => {
  return (
    <figure className={cn('rounded-md bg-background p-6 text-sm leading-6', className)}>
      <blockquote className='text-foreground'>
        <p>“{quote}”</p>
      </blockquote>
      <figcaption className='mt-6 flex items-center gap-x-4'>
        <Image
          width={50}
          height={50}
          className='rounded-full bg-gray-50'
          src={avatarUrl}
          alt={`Image of ${name}`}
        />
        <div>
          <div className='font-semibold text-gray-900'>{name}</div>
        </div>
      </figcaption>
    </figure>
  );
};
