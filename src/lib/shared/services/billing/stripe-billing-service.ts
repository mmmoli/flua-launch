import { Fail, Ok, Result } from 'rich-domain';
import Stripe from 'stripe';

import { env } from '../../config/env';
import {
  BillingServiceTrait,
  CheckoutSession,
  CreateCheckoutSessionParams,
  CreateCustomerParams,
  Customer,
} from './types';

export class StripeBillingService implements BillingServiceTrait {
  private BASE_URL = env.VERCEL_URL ?? 'htpp://localhost:3000';

  constructor(protected readonly client: Stripe) {}

  async createCheckoutSession(data: CreateCheckoutSessionParams): Promise<Result<CheckoutSession>> {
    try {
      let params: Stripe.Checkout.SessionCreateParams = {
        allow_promotion_codes: true,
        billing_address_collection: 'required',
        customer: data.customerId,
        customer_update: {
          address: 'auto',
        },
        mode: 'subscription',
        line_items: [
          {
            price: data.priceId,
            quantity: 1,
          },
        ],
        success_url: new URL('/dash', 'http://localhost:3000').toString(),
        cancel_url: new URL('/', 'http://localhost:3000').toString(),
        subscription_data: {
          metadata: {
            payingUserId: String(data.user.id),
          },
        },
      };
      const checkoutSession = await this.client.checkout.sessions.create(params);

      if (!checkoutSession.url) return Fail(`Stripe Could not create a checkout URL`);

      const response: CheckoutSession = {
        url: checkoutSession.url,
      };
      return Ok(response);
    } catch (e) {
      console.error(e);
      return Fail(`Failed to create checkout session`);
    }
  }

  async createCustomer(data: CreateCustomerParams): Promise<Result<Customer>> {
    const {
      user: { email, id, name },
    } = data;

    if (!email) return Fail('Failed to Create Customer: No email');
    try {
      const stripeCustomer = await this.client.customers.create({
        name: name || undefined,
        email: email || undefined,
        metadata: {
          userId: String(id),
        },
      });

      const customer: Customer = {
        customerId: stripeCustomer.id,
      };

      return Ok(customer);
    } catch (e) {
      console.error(e);
      return Fail('Failed to Create Customer');
    }
  }
}
