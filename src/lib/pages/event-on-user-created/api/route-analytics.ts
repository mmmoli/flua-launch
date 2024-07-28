import { trackEvent } from '@shared/services/analytics/node';
import { verify } from '@shared/services/events/api/verify-signature';
import { logger } from '@shared/services/logger';

async function handler(req: Request) {
  try {
    await trackEvent('user:created');
  } catch (error) {
    logger.error(error);
    return Response.error();
  }

  return Response.json({ message: 'analytics tracked' });
}

export const POST = verify(handler);
