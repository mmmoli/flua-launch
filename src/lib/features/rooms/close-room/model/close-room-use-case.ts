import { Db, eq, schema } from '@shared/services/db';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import { CloseRoomUseCaseDto } from '../lib/schemas';

export interface CloseRoomDeps {
  db: Db;
}

export class CloseRoomUseCase implements IUseCase<CloseRoomUseCaseDto, Result<void>> {
  constructor(protected readonly deps: CloseRoomDeps) {}
  async execute(data: CloseRoomUseCaseDto): Promise<Result<void>> {
    'use server';

    try {
      await this.deps.db.delete(schema.rooms).where(eq(schema.rooms.id, data.roomId));
      return Ok();
    } catch (error) {
      console.error(error);
      return Fail('Failed to close room');
    }
  }
}
