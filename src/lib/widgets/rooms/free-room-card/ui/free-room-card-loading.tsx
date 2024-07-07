import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Skeleton } from '@ui/skeleton';
import { FC } from 'react';

export const FreeRoomCardLoading: FC = async () => {
  return (
    <Card className='w-2/5'>
      <CardHeader>
        <CardTitle>
          <Skeleton className='h-8' />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-8' />
      </CardContent>
    </Card>
  );
};
