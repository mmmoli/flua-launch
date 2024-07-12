'use server';

import { RoomListPage } from '@shared/config/routes';
import { trackEvent } from '@shared/services/analytics/node';
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
  const maybeTier = formData.get('tier');
  const tier = (maybeTier ? String(maybeTier) : undefined) as OpenRoomUseCaseDto['tier'];

  const data = {
    name: String(formData.get('name')),
    ownerId: String(formData.get('ownerId')),
    tier,
  } satisfies OpenRoomUseCaseDto;

  const cleaned = OpenRoomUseCaseDtoSchema.safeParse(data);
  if (!cleaned.success) throw new Error('Invalid data');

  const result = await useCase.execute(cleaned.data);
  if (result.isFail()) throw new Error(result.error());

  const { tier: t, ...props } = cleaned.data;
  await trackEvent('room:opened', {
    props: {
      ...props,
      ...(t ? { tier: t } : {}),
    },
  });

  revalidatePath(RoomListPage().url);
  return result.value();
};
