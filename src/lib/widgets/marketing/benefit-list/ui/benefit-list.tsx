import { FC, ReactNode } from 'react';

import { BENEFITS } from '../lib/benefit-data';
import { BenefitListCard } from './benefit-list-card';

export interface BenefitListProps {}

export const BenefitList: FC<BenefitListProps> = () => {
  return (
    <div>
      <div className='mx-auto my-8 grid grid-cols-1 gap-8 md:max-w-4xl'>
        {BENEFITS.map((benefit, i) => (
          <BenefitListCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};
