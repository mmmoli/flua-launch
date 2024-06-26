import { env } from '@shared/config/env';
import { DashPage } from '@shared/config/routes';
import { assertUser } from '@shared/services/auth/api';
import { BillingServiceTrait } from '@shared/services/billing';
import { Db, eq, schema } from '@shared/services/db';
import { Fail, IUseCase, Ok, Result } from 'rich-domain';

import {
  CreateCheckoutSessionUseCaseDto,
  CreateCheckoutSessionUseCaseDtoSchema,
} from '../lib/schemas';

export interface CreateCheckoutSessionUseCaseDeps {
  db: Db;
  billingService: BillingServiceTrait;
}

export interface CreateCheckoutSessionUseCaseResponse {
  url: string;
}

export class CreateCheckoutSessionUseCase
  implements
    IUseCase<CreateCheckoutSessionUseCaseDto, Result<CreateCheckoutSessionUseCaseResponse>>
{
  constructor(protected readonly deps: CreateCheckoutSessionUseCaseDeps) {}
  async execute(
    data: CreateCheckoutSessionUseCaseDto
  ): Promise<Result<CreateCheckoutSessionUseCaseResponse>> {
    'use server';

    try {
      const { success } = CreateCheckoutSessionUseCaseDtoSchema.safeParse(data);
      if (!success) Fail('Invalid inputs');

      const session = await assertUser();
      const user = session?.user;

      if (!user) return Fail('No signed-in user');

      const customer = await this.deps.db.query.customers.findFirst({
        where: eq(schema.customers.id, user.id),
      });

      if (!customer) return Fail('Customer not found');

      const checkoutSessionResult = await this.deps.billingService.createCheckoutSession({
        user,
        customerId: customer.stripeCustomerId,
        successUrl: new URL(DashPage(null).url, env.VERCEL_URL ?? 'http://localhost:3000'),
        priceId: data.priceId,
      });

      if (checkoutSessionResult.isFail()) return Fail(checkoutSessionResult.error());
      const checkoutSession = checkoutSessionResult.value();

      const response: CreateCheckoutSessionUseCaseResponse = {
        url: checkoutSession.url,
      };

      return Ok(response);
    } catch (error) {
      console.error(error);
      return Fail('Failed to create checkout session');
    }
  }
}
