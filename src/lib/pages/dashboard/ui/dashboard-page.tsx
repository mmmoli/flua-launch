import { OpenRoomButton } from '@features/rooms/open-room';
import { assertUser } from '@shared/services/auth/api';
import { Button } from '@ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import Link from 'next/link';
import { FC } from 'react';

export const DashboardPage: FC = async () => {
  const session = await assertUser();
  const userId = session?.user.id;

  if (!userId) return null;

  return (
    <main className='flex h-full items-center justify-center'>
      <Card className='w-2/5'>
        <CardHeader>
          <CardTitle>Rooms</CardTitle>
        </CardHeader>
        <CardContent>
          <OpenRoomButton name='Awesome Room' ownerId={userId} />

          <Button asChild variant='link' className='px-0'>
            <Link href='/r/awesome-n82z1'>Free Room</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};
