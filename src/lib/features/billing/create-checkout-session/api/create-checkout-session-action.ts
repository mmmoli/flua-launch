'use server';

import { assertUser } from '@shared/services/auth/api';
import { billingService } from '@shared/services/billing';
import { db } from '@shared/services/db';
import { redirect } from 'next/navigation';

import { CreateCheckoutSessionUseCaseDto } from '../lib/schemas';
import { CreateCheckoutSessionUseCase } from '../model/create-checkout-session-use-case';

const useCase = new CreateCheckoutSessionUseCase({
  db,
  billingService,
});

export const createCheckoutAction = async (formData: FormData) => {
  await assertUser();
  const data = {
    priceId: String(formData.get('priceId')),
  } satisfies CreateCheckoutSessionUseCaseDto;

  const result = await useCase.execute(data);
  if (result.isFail()) return undefined;
  const session = result.value();
  redirect(session.url);
};
