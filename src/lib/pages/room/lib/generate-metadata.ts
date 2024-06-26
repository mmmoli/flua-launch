import { getRoomBySlug } from '@entities/room/api/get-room-by-slug';
import { Metadata, ResolvingMetadata } from 'next';

import { RoomPageProps } from '../ui/room-page';

export async function generateMetadata(
  { params }: RoomPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const roomResult = await getRoomBySlug({ slug: params.slug });
  if (roomResult.isFail()) throw new Error(roomResult.error());
  const room = roomResult.value();
  return {
    title: room.name,
  };
}
