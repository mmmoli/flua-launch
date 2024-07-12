import { Db, eq, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { RoomServiceTrait } from '@shared/services/video-conferencing';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import { CloseRoomUseCaseDto } from '../lib/schemas';

export interface CloseRoomDeps {
  db: Db;
  roomService: RoomServiceTrait;
}

export class CloseRoomUseCase implements IUseCase<CloseRoomUseCaseDto, Result<void>> {
  constructor(protected readonly deps: CloseRoomDeps) {}
  async execute(data: CloseRoomUseCaseDto): Promise<Result<void>> {
    'use server';

    try {
      const room = await this.deps.db.query.rooms.findFirst({
        where: (room, { eq }) => eq(room.id, data.roomId),
      });
      if (!room) return Fail(`Room not found for id: ${data.roomId}`);

      if (room.ownerId !== data.userId) return Fail('You are not the owner of this room');

      await Promise.all([
        this.deps.db.delete(schema.rooms).where(eq(schema.rooms.id, data.roomId)),
        this.deps.roomService.delete(room.externalId),
      ]);

      return Ok();
    } catch (error) {
      logger.error(error);
      return Fail('Failed to close room');
    }
  }
}
