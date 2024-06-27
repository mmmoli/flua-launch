import { FC, ReactNode } from 'react';

import { FEATURES } from '../lib/feature-data';
import { FeatureListCard } from './feature-list-card';

export interface FeatureListProps {}

export const FeatureList: FC<FeatureListProps> = () => {
  return (
    <div>
      <div className='my-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mx-20'>
        {FEATURES.map((feature, i) => (
          <FeatureListCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};
