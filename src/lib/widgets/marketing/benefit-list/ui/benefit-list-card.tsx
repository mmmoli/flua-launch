import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/card';
import { ComponentPropsWithoutRef, FC } from 'react';

import { Benefit } from '../lib/benefit-type';

export interface BenefitListCardProps extends ComponentPropsWithoutRef<'div'> {
  benefit: Benefit;
}

export const BenefitListCard: FC<BenefitListCardProps> = ({
  benefit: { body, headline },
  className,
}) => {
  return (
    <Card className='border-none bg-transparent shadow-none'>
      <CardHeader>
        <CardTitle>{headline}</CardTitle>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
};
