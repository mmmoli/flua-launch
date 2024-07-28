import { Events } from '@shared/services/events';
import { verify } from '@shared/services/events/api/verify-signature';
import { logger } from '@shared/services/logger';
import { notificationService } from '@shared/services/transactional';

async function handler(req: Request) {
  const data: Events['USER-CREATED'] = await req.json();

  try {
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
  } catch (error) {
    logger.error(error);
    return Response.error();
  }
  return Response.json({ message: 'notifications tracked' });
}

export const POST = verify(handler);
