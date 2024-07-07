'use server';

import { DashPage } from '@shared/config/routes';
import { db } from '@shared/services/db';
import { roomService } from '@shared/services/video-conferencing/api';
import { revalidatePath } from 'next/cache';

import { OpenRoomUseCaseDto, OpenRoomUseCaseDtoSchema } from '../lib/schemas';
import { OpenRoomUseCase } from '../model/open-room-use-case';

const useCase = new OpenRoomUseCase({
  db,
  roomService,
});

export const openRoomAction = async (formData: FormData) => {
  const data = {
    name: String(formData.get('name')),
    ownerId: String(formData.get('ownerId')),
  } satisfies OpenRoomUseCaseDto;

  const cleaned = OpenRoomUseCaseDtoSchema.safeParse(data);
  if (!cleaned.success) throw new Error('Invalid data');

  const result = await useCase.execute(cleaned.data);
  if (result.isFail()) throw new Error(result.error());

  revalidatePath(DashPage().url);
  return result.value();
};
