import { schema } from '@shared/services/db';

export type RoomModel = schema.RoomModel;
export type OpenRoomModel = schema.InsertRoomModel;
export type RoomModelId = RoomModel['id'];
export type RoomModelSlug = RoomModel['slug'];
export type RoomTier = RoomModel['tier'];
export type RoomModelExternalId = RoomModel['externalId'];

export * from './lib/room-service-trait';
