import { logger } from '@shared/services/logger';
import { Fail, Ok, Result } from 'rich-domain';
import Stripe from 'stripe';

import {
  BillingServiceTrait,
  CheckoutSession,
  CreateCheckoutSessionParams,
  CreateCustomerParams,
  Customer,
} from './types';

export class StripeBillingService implements BillingServiceTrait {
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
        // success_url: new URL('/dash', this.BASE_URL).toString(),
        // cancel_url: new URL('/', this.BASE_URL).toString(),
        success_url: data.successUrl.toString(),
        cancel_url: data.cancelUrl?.toString(),
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
      logger.error(e);
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
      logger.error(e);
      return Fail('Failed to Create Customer');
    }
  }
}
