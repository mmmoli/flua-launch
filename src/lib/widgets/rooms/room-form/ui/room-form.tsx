import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { FC } from 'react';

import { assertUser } from '@/features/auth';

import { Form } from './form';

export interface RoomFormProps {}

export const RoomForm: FC<RoomFormProps> = async () => {
  const session = await assertUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Room</CardTitle>
      </CardHeader>
      <CardContent>
        <Form userId={session?.user?.id!} />
      </CardContent>
    </Card>
  );
};
