import { FC, ReactNode } from 'react';

import { TESTIMONIALS } from '../lib/testimonial-data';
import { TestimonialListCard } from './testimonial-list-card';

export interface TestimonialListProps {}

export const TestimonialList: FC<TestimonialListProps> = () => {
  return (
    <div>
      <div className='my-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mx-20'>
        {TESTIMONIALS.map((testimonial, i) => (
          <TestimonialListCard
            key={testimonial.id}
            testimonial={testimonial}
            className={i === 3 ? 'md:hidden' : ''}
          />
        ))}
      </div>
    </div>
  );
};
