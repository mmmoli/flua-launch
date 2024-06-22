'use server';
import { db } from '@shared/services/db';
import { revalidateTag } from 'next/cache';

import { OpenRoomUseCaseDto, OpenRoomUseCaseDtoSchema } from '../lib/schemas';
import { OpenRoomUseCase } from '../model/open-room-use-case';

export const openRoomAction = async (formData: FormData) => {
  console.log(formData);
  const useCase = new OpenRoomUseCase({
    db,
  });

  const data = {
    name: String(formData.get('name')),
    ownerId: String(formData.get('ownerId')),
  } satisfies OpenRoomUseCaseDto;

  const cleaned = OpenRoomUseCaseDtoSchema.safeParse(data);
  if (!cleaned.success) {
    throw new Error('Invalid data');
  }

  const result = await useCase.execute(cleaned.data);
  if (result.isFail()) throw new Error('Failed to open room');

  revalidateTag('/dash');
  return true;
};
