import { OpenRoomUseCase } from '@features/rooms/open-room/model/open-room-use-case';
import { trackEvent } from '@shared/services/analytics/node';
import { db } from '@shared/services/db';
import { Events } from '@shared/services/events';
import { verify } from '@shared/services/events/api/verify-signature';
import { logger } from '@shared/services/logger';
import { notificationService } from '@shared/services/transactional';
import { roomService } from '@shared/services/video-conferencing/api';

const useCase = new OpenRoomUseCase({
  db,
  roomService,
});

async function handler(req: Request) {
  const data: Events['USER-CREATED'] = await req.json();

  try {
    await trackEvent('user:created');
    const notificationResult = await notificationService.trigger('on-user-created', {
      to: data.user,
      payload: {
        user: {
          avatarUrl: data.user.avatarUrl,
          name: data.user.email,
        },
      },
    });

    if (notificationResult.isFail()) throw new Error(notificationResult.error());

    const result = await useCase.execute({
      name: 'My Free Room',
      ownerId: data.user.id,
      tier: 'FREE',
    });

    if (result.isFail()) throw new Error(result.error());
  } catch (error) {
    logger.error(error);
    return Response.error();
  }
  return Response.json({ message: 'notifications tracked' });
}

export const POST = verify(handler);
