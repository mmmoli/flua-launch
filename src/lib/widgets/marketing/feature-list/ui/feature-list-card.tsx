import { Card, CardDescription, CardHeader, CardTitle } from '@ui/card';
import { ComponentPropsWithoutRef, FC } from 'react';

import { Feature } from '../lib/feature-type';

export interface FeatureListCardProps extends ComponentPropsWithoutRef<'div'> {
  feature: Feature;
}

export const FeatureListCard: FC<FeatureListCardProps> = ({
  feature: { metric, value },
  className,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{metric}</CardTitle>
        <CardDescription>{value}</CardDescription>
      </CardHeader>
    </Card>
  );
};
