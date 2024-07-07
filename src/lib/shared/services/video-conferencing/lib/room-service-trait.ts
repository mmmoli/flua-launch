import { IResult } from 'rich-domain';

import { RoomModelSlug, RoomTier } from '../types';

export interface CreateRoomParams {
  roomSlug: RoomModelSlug;
  tier?: RoomTier;
}

export interface RegisterRoomResponse {
  externalId: string;
  roomCode: string;
}

export interface RoomServiceTrait {
  create(params: CreateRoomParams): Promise<IResult<RegisterRoomResponse>>;
  delete(externalId: string): Promise<IResult<void>>;
}
