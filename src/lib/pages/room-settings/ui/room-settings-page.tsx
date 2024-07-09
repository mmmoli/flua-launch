import { RoomEntity, RoomModelSlug } from '@entities/room';
import { CloseRoomButton } from '@features/rooms/close-room';
import { RenameRoomForm } from '@features/rooms/rename-room';
import { assertUser } from '@shared/services/auth/api';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card';
import Link from 'next/link';
import { FC } from 'react';

export interface RoomSettingsPageProps {
  params: { slug: RoomModelSlug };
}

export const RoomSettingsPage: FC<RoomSettingsPageProps> = async ({ params }) => {
  const session = await assertUser();
  const userId = session?.user.id;

  if (!userId) return null;

  return (
    <RoomEntity slug={params.slug}>
      {(room) => (
        <>
          <div className='mx-auto grid w-full max-w-6xl gap-2'>
            <h1 className='text-3xl font-semibold'>Settings</h1>
            <p className='text-sm'>{room.name}</p>
          </div>

          <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
            <nav className='grid gap-4 text-sm text-muted-foreground'>
              <a href='#general'>General</a>
              <a href='#danger-zone'>Danger Zone</a>
            </nav>
            <div className='grid gap-6'>
              <section id='general'>
                <Card>
                  <CardHeader>
                    <CardTitle>Room Name</CardTitle>
                    <CardDescription>Used to identify your room when people join.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RenameRoomForm room={room} userId={userId} />
                  </CardContent>
                </Card>
              </section>
              <section id='danger-zone'>
                <Card>
                  <CardHeader>
                    <CardTitle>Danger Zone</CardTitle>
                    <CardDescription>Things here cannot be undone.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CloseRoomButton
                      size='sm'
                      variant='destructive'
                      roomId={room.id}
                      userId={userId}
                    />
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </>
      )}
    </RoomEntity>
  );
};
