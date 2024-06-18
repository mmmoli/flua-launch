import { Db, schema } from '@shared/services/db';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import { OpenRoomUseCaseDto } from '../lib/schemas';
import { slugify } from '../lib/slugify';

export interface OpenRoomUseCaseDeps {
  db: Db;
}

export class OpenRoomUseCase implements IUseCase<OpenRoomUseCaseDto, Result<void>> {
  constructor(protected readonly deps: OpenRoomUseCaseDeps) {}
  async execute(data: OpenRoomUseCaseDto): Promise<Result<void>> {
    'use server';

    try {
      const slug = slugify(data.name);
      await this.deps.db
        .insert(schema.rooms)
        .values({
          name: data.name,
          ownerId: data.ownerId,
          slug,
        })
        .returning();
      return Ok();
    } catch (error) {
      console.error(error);
      return Fail('Failed to create room');
    }
  }
}
