import { Room, SDK } from '@100mslive/server-sdk';
import { Fail, IResult, Ok } from 'rich-domain';

import { RoomModel, RoomModelSlug } from '../types';
import { RegisterRoomResponse, RoomServiceTrait } from './room-service-trait';

export interface HMSRoomServiceDeps {
  client: SDK;
}

export class HMSRoomService implements RoomServiceTrait {
  constructor(protected readonly deps: HMSRoomServiceDeps) {}

  async create(slug: RoomModelSlug): Promise<IResult<RegisterRoomResponse>> {
    try {
      const hmsRoom = await this.deps.client.rooms.create({
        name: slug,
      });
      return Ok({
        externalId: hmsRoom.id,
      });
    } catch (e) {
      console.error(e);
      return Fail('Failed to create room');
    }
  }

  async delete(externalId: string): Promise<IResult<void>> {
    try {
      await this.deps.client.rooms.enableOrDisable(externalId, false);
      return Ok();
    } catch (e) {
      console.error(e);
      return Fail('Failed to delete room');
    }
  }
}
