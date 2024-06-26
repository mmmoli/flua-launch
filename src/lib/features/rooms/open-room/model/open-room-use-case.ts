import { RoomModel } from '@entities/room';
import { Db, schema } from '@shared/services/db';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import { OpenRoomUseCaseDto } from '../lib/schemas';
import { slugify } from '../lib/slugify';

export interface OpenRoomUseCaseDeps {
  db: Db;
}

export class OpenRoomUseCase implements IUseCase<OpenRoomUseCaseDto, Result<RoomModel>> {
  constructor(protected readonly deps: OpenRoomUseCaseDeps) {}
  async execute(data: OpenRoomUseCaseDto): Promise<Result<RoomModel>> {
    'use server';

    try {
      const slug = slugify(data.name);
      const result = await this.deps.db
        .insert(schema.rooms)
        .values({
          name: data.name,
          ownerId: data.ownerId,
          slug,
        })
        .returning();
      const maybeRoom = result.pop();
      if (!maybeRoom) return Fail('No room created');
      const room = maybeRoom as RoomModel;
      return Ok(room);
    } catch (error) {
      console.error(error);
      return Fail('Failed to create room');
    }
  }
}
