import { Db, eq, schema } from '@shared/services/db';
import { logger } from '@shared/services/logger';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import { DeleteAccountUseCaseDto } from '../lib/schemas';

export interface DeleteAccountDeps {
  db: Db;
}

export class DeleteAccountUseCase implements IUseCase<DeleteAccountUseCaseDto, Result<void>> {
  constructor(protected readonly deps: DeleteAccountDeps) {}
  async execute(data: DeleteAccountUseCaseDto): Promise<Result<void>> {
    'use server';

    try {
      console.log('deleting account…');
      return Ok();
    } catch (error) {
      logger.error(error);
      return Fail('Failed to delete account');
    }
  }
}
