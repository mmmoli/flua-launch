import { RoomEntity, RoomModelSlug } from '@entities/room';
import { FC } from 'react';

export interface RoomSettingsPageProps {
  params: { slug: RoomModelSlug };
}

export const RoomSettingsPage: FC<RoomSettingsPageProps> = async ({ params }) => {
  return <RoomEntity slug={params.slug}>{(room) => <h1>{room.name} Settings</h1>}</RoomEntity>;
};
