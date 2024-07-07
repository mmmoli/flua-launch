'use server';

import { RoomListPage, RoomSettingsPage } from '@shared/config/routes';
import { db } from '@shared/services/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { RenameRoomUseCaseDto, renameRoomUseCaseDtoSchema } from '../lib/schemas';
import { RenameRoomUseCase } from '../model/rename-room-use-case';

const useCase = new RenameRoomUseCase({
  db,
});

export const renameRoomAction = async (formData: FormData) => {
  const data = {
    name: String(formData.get('name')),
    userId: String(formData.get('userId')),
    roomId: String(formData.get('roomId')),
  } satisfies RenameRoomUseCaseDto;

  const cleaned = renameRoomUseCaseDtoSchema.safeParse(data);
  if (!cleaned.success) throw new Error('Invalid data');

  const result = await useCase.execute(cleaned.data);
  if (result.isFail()) throw new Error(result.error());
  const slug = result.value();

  revalidatePath(RoomListPage().url);
  redirect(RoomSettingsPage({ slug }).url);
};
