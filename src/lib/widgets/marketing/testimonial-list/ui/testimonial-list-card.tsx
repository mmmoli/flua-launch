import { cn } from '@shared/design-system/utils';
import { Card, CardContent } from '@ui/card';
import Image from 'next/image';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { Testimonial } from '../lib/testimonial-type';

export interface TestimonialListCardProps extends ComponentPropsWithoutRef<'div'> {
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
    <Card className={className}>
      <CardContent>
        <figure>
          <figcaption className='mb-3 mt-6 flex items-center gap-2'>
            <Image
              width={45}
              height={45}
              className='rounded-full bg-gray-50'
              src={avatarUrl}
              alt={`Image of ${name}`}
            />
            <div>
              <div className='font-semibold text-gray-900'>{name}</div>
            </div>
          </figcaption>

          <blockquote className='text-foreground'>
            <p>“{quote}”</p>
          </blockquote>
        </figure>
      </CardContent>
    </Card>
  );
};
