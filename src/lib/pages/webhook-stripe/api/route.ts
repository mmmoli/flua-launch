import { env } from '@shared/config/env';
import { stripe } from '@shared/services/billing/stripe/config';
import Stripe from 'stripe';

import { createSubscription } from '../model/create-subscription';
import { updateSubscription } from '../model/update-subscription';

const relevantEvents = new Set([
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
]);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  const webhookSecret = env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return new Response('Webhook secret not found.', { status: 400 });
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    console.error(`🔔  Webhook received: ${event.type}`);
  } catch (err: any) {
    console.error(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'customer.subscription.created': {
          const { id, customer, status } = event.data.object as Stripe.Subscription;

          const result = await createSubscription({
            customerId: customer as string,
            status,
            subscriptionId: id,
          });

          if (result.isFail()) {
            const msg = `Webhook handler failed. ${result.error()}`;
            console.error(msg);
            return new Response(msg, {
              status: 400,
            });
          }

          break;
        }

        case 'customer.subscription.updated':
        case 'customer.subscription.deleted': {
          const { id, customer, status } = event.data.object as Stripe.Subscription;

          const result = await updateSubscription({
            customerId: customer as string,
            status,
            subscriptionId: id,
          });

          if (result.isFail()) {
            const msg = `Webhook handler failed. ${result.error()}`;
            console.error(msg);
            return new Response(msg, {
              status: 400,
            });
          }

          break;
        }

        default: {
          const msg = 'Webhook handler failed. Unhandled event.';
          console.error(msg);
          return new Response(msg, {
            status: 400,
          });
        }
      }
    } catch (error) {
      console.log(error);
      return new Response('Webhook handler failed. View your Next.js function logs.', {
        status: 400,
      });
    }
  } else {
    const msg = `Unsupported event type: ${event.type}`;
    console.error(msg);
    return new Response(msg, {
      status: 400,
    });
  }
  return new Response(JSON.stringify({ received: true }));
}
