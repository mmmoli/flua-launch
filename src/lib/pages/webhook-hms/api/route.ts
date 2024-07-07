import { getRoomByExternalId } from '@entities/room/api/get-room-by-external-id';
import { resetCall } from '@features/calls/reset-call';
import { env } from '@shared/config/env';

import { eventSchema, HMSWebhookEvent } from '../lib/hms-events';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('X-100ms-Key') as string;
  const webhookSecret = env.HMS_WEBHOOK_SECRET;

  let event: HMSWebhookEvent;
  try {
    if (!sig || !webhookSecret) return new Response('Webhook secret not found.', { status: 400 });
    if (sig !== webhookSecret) throw new Error('Invalid webhook secret.');
    event = eventSchema.parse(JSON.parse(body));
    console.log(`🔔  Webhook received: ${event.type}`);
  } catch (err: any) {
    console.error(JSON.stringify(body, null, 2));
    console.error(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'peer.join.success':
      case 'peer.leave.success': {
        break;
      }

      case 'session.open.success': {
        console.log('Session Opened');
        break;
      }

      case 'session.close.success': {
        const roomResult = await getRoomByExternalId({ externalId: event.data.room_id });
        if (roomResult.isFail()) throw new Error(roomResult.error());
        const room = roomResult.value();
        const result = await resetCall({
          roomId: room.id,
        });
        if (result.isFail()) throw new Error(result.error());
      }

      default: {
        const msg = 'Webhook handler failed. Unhandled event.';
        return new Response(msg, {
          status: 400,
        });
      }
    }
  } catch (e) {
    console.error(e);
    return new Response(`Webhook Error: ${e.message}`, { status: 400 });
  }

  return new Response(JSON.stringify({ received: true }));
}
