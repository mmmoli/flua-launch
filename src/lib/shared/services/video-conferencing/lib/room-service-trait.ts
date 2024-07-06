import { IResult } from 'rich-domain';

import { RoomModel, RoomModelSlug } from '../types';

export interface RegisterRoomResponse {
  externalId: string;
}

export interface RoomServiceTrait {
  create(roomSlug: RoomModelSlug): Promise<IResult<RegisterRoomResponse>>;
  delete(externalId: string): Promise<IResult<void>>;
}
