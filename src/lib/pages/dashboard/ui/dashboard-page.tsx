import { assertUser } from '@shared/services/auth/api';
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
          <Link href='/r/sdsd-n82z1'>View Room</Link>
        </CardContent>
      </Card>
    </main>
  );
};
