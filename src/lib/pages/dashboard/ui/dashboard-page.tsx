import { assertUser } from '@features/auth/assert-user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/card';
// import { OpenRoomForm } from '@widgets/rooms/open-room-form';
// import { RoomList } from '@widgets/rooms/room-list';
import { FC } from 'react';

export const DashboardPage: FC = async () => {
  await assertUser();

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
          <div className='grid gap-6'></div>
        </CardContent>
      </Card>
    </main>
  );
};
