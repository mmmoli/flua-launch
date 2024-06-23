import { User } from '@shared/services/auth';
import { Result } from 'rich-domain';

export interface Customer {
  customerId: string;
}

export interface CreateCustomerParams {
  user: User;
}

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
  createCustomer(data: CreateCustomerParams): Promise<Result<Customer>>;
  createCheckoutSession(data: CreateCheckoutSessionParams): Promise<Result<CheckoutSession>>;
}
