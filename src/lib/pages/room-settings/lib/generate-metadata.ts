import { getRoomBySlug } from '@entities/room/api/get-room-by-slug';
import { logger } from '@shared/services/logger';
import { Metadata, ResolvingMetadata } from 'next';

import { RoomSettingsPageProps } from '../ui/room-settings-page';

export async function generateMetadata(
  { params }: RoomSettingsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const roomResult = await getRoomBySlug({ slug: params.slug });
    if (roomResult.isFail()) return {};
    const room = roomResult.value();
    return {
      title: `${room.name} Settings`,
    };
  } catch (e) {
    logger.error(e);
    return {};
  }
}
