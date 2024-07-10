import { getRoomBySlug } from '@entities/room/api/get-room-by-slug';
import { logger } from '@shared/services/logger';
import { Metadata, ResolvingMetadata } from 'next';

import { RoomPageProps } from '../ui/room-page';

export async function generateMetadata(
  { params }: RoomPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const roomResult = await getRoomBySlug({ slug: params.slug });
    if (roomResult.isFail()) return {};
    const room = roomResult.value();
    return {
      title: room.name,
    };
  } catch (e) {
    logger.error(e);
    return {};
  }
}
