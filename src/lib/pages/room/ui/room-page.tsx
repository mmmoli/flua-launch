import { RoomEntity, RoomModelSlug } from '@entities/room';
import { getRoomBySlug } from '@entities/room/api/get-room-by-slug';
import { RoomGatewayWidget } from '@widgets/rooms/room-gateway';
import type { Metadata, ResolvingMetadata } from 'next';
import { FC } from 'react';

export interface RoomPageProps {
  params: { slug: RoomModelSlug };
}

export const RoomPage: FC<RoomPageProps> = async ({ params }) => {
  return <RoomEntity slug={params.slug}>{(room) => <RoomGatewayWidget room={room} />}</RoomEntity>;
};
