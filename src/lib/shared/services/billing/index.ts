import { StripeBillingService } from './stripe-billing-service';
export * from './types';
import { stripe } from './stripe/config';

export const billingService = new StripeBillingService(stripe);
