'use server';
import { db } from '@shared/services/db';

import { CloseRoomUseCaseDto, CloseRoomUseCaseDtoSchema } from '../lib/schemas';
import { CloseRoomUseCase } from '../model/close-room-use-case';

export const closeRoomAction = async (formData: FormData) => {
  const useCase = new CloseRoomUseCase({
    db,
  });

  const data = {
    roomId: String(formData.get('roomId')),
    userId: String(formData.get('userId')),
  } satisfies CloseRoomUseCaseDto;

  const cleaned = CloseRoomUseCaseDtoSchema.safeParse(data);
  if (!cleaned.success) throw new Error('Invalid data');

  const result = await useCase.execute(cleaned.data);
  if (result.isFail()) throw new Error(result.error());

  return true;
};
