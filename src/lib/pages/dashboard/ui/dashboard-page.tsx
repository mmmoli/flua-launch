import { assertUser } from '@features/auth/assert-user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/card';
import { OpenRoomForm } from '@widgets/rooms/open-room-form';
import { FC } from 'react';

export const DashboardPage: FC = async () => {
  const session = await assertUser();
  const userId = session?.user.id;

  if (!userId) return null;

  return (
    <main>
      <h1 className='flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0'>
        Dashboard
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-6'>
            <OpenRoomForm userId={userId} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
