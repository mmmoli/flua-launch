import { RoomPage } from '@shared/config/routes';
import { assertUser } from '@shared/services/auth/api';
import { Button } from '@ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import Link from 'next/link';
import { FC } from 'react';

import { getFreeRoomForUser } from '../api/get-free-room-for-user';

export const FreeRoomCard: FC = async () => {
  const session = await assertUser();
  const userId = session?.user.id;

  if (!userId) return null;

  const freeRoomResult = await getFreeRoomForUser({ userId });
  if (freeRoomResult.isFail()) throw new Error(freeRoomResult.error());
  const freeRoom = freeRoomResult.value();

  return (
    <Card className='w-2/5'>
      <CardHeader>
        <CardTitle>My Room</CardTitle>
      </CardHeader>
      <CardContent>
        <Button asChild variant='link' className='px-0'>
          <Link href={RoomPage({ slug: freeRoom.slug }).url}>{freeRoom.name}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
