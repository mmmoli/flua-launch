'use server';
import { RoomListPage } from '@shared/config/routes';
import { db } from '@shared/services/db';
import { roomService } from '@shared/services/video-conferencing/api';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { CloseRoomUseCaseDto, CloseRoomUseCaseDtoSchema } from '../lib/schemas';
import { CloseRoomUseCase } from '../model/close-room-use-case';

const useCase = new CloseRoomUseCase({
  db,
  roomService,
});

export const closeRoomAction = async (formData: FormData) => {
  const data = {
    roomId: String(formData.get('roomId')),
    userId: String(formData.get('userId')),
  } satisfies CloseRoomUseCaseDto;

  const cleaned = CloseRoomUseCaseDtoSchema.safeParse(data);
  if (!cleaned.success) throw new Error('Invalid data');

  const result = await useCase.execute(cleaned.data);
  if (result.isFail()) throw new Error(result.error());

  revalidatePath(RoomListPage().url);
  redirect(RoomListPage().url);
};
