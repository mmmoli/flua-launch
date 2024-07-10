import { RoomModelSlug } from '@entities/room';
import { Db, eq, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { slugify } from '@shared/utils';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import { RenameRoomUseCaseDto } from '../lib/schemas';

export interface RenameRoomUseCaseDeps {
  db: Db;
}

export class RenameRoomUseCase implements IUseCase<RenameRoomUseCaseDto, Result<RoomModelSlug>> {
  constructor(protected readonly deps: RenameRoomUseCaseDeps) {}
  async execute(data: RenameRoomUseCaseDto): Promise<Result<RoomModelSlug>> {
    'use server';

    try {
      const room = await this.deps.db.query.rooms.findFirst({
        where: (room, { eq }) => eq(room.id, data.roomId),
      });
      if (!room) return Fail(`Room not found for id: ${data.roomId}`);

      if (room.ownerId !== data.userId) return Fail('You are not the owner of this room');

      const slug = slugify(data.name);

      const result = await this.deps.db
        .update(schema.rooms)
        .set({
          name: data.name,
          slug,
        })
        .where(eq(schema.rooms.id, data.roomId))
        .returning();

      return Ok(slug);
    } catch (error) {
      logger.error(error);
      return Fail('Failed to rename room');
    }
  }
}
