import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/card';
import { ComponentPropsWithoutRef, FC } from 'react';

import { Benefit } from '../lib/benefit-type';

export interface BenefitListCardProps extends ComponentPropsWithoutRef<'div'> {
  benefit: Benefit;
}

export const BenefitListCard: FC<BenefitListCardProps> = ({
  benefit: { body, headline, image },
  className,
}) => {
  return (
    <Card className='flex flex-col items-center gap-4 border-none bg-transparent shadow-none even:flex-row-reverse md:flex-row'>
      <div className='max-w-lg'>
        <CardHeader>
          <CardTitle>{headline}</CardTitle>
        </CardHeader>
        <CardContent>{body}</CardContent>
      </div>
      <div className='px-20 md:px-0'>{image}</div>
    </Card>
  );
};
