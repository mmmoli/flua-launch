import { User } from '@shared/services/auth/client';
import { Result } from 'rich-domain';

export interface CheckoutSession {
  url: string;
}

export interface CreateCheckoutSessionParams {
  cancelUrl?: URL;
  customerId: string;
  priceId: string;
  successUrl: URL;
  user: User;
}

export interface BillingServiceTrait {
  createCheckoutSession(data: CreateCheckoutSessionParams): Promise<Result<CheckoutSession>>;
}
