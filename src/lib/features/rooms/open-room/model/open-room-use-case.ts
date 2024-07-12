import { RoomModel } from '@entities/room';
import { Db, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { RoomServiceTrait } from '@shared/services/video-conferencing';
import { slugify } from '@shared/utils';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import { OpenRoomUseCaseDto } from '../lib/schemas';

export interface OpenRoomUseCaseDeps {
  db: Db;
  roomService: RoomServiceTrait;
}

export class OpenRoomUseCase implements IUseCase<OpenRoomUseCaseDto, Result<RoomModel>> {
  constructor(protected readonly deps: OpenRoomUseCaseDeps) {}
  async execute(data: OpenRoomUseCaseDto): Promise<Result<RoomModel>> {
    'use server';

    try {
      const slug = slugify(data.name);

      const serviceResult = await this.deps.roomService.create({
        roomSlug: slug,
      });
      if (serviceResult.isFail()) return Fail(serviceResult.error());
      const { externalId, roomCode } = serviceResult.value();

      const result = await this.deps.db
        .insert(schema.rooms)
        .values({
          ...data,
          slug,
          externalId,
          roomCode,
        })
        .returning();

      const maybeRoom = result.pop();
      if (!maybeRoom) return Fail('No room created');

      return Ok(maybeRoom);
    } catch (error) {
      logger.error(error);
      return Fail('Failed to create room');
    }
  }
}
