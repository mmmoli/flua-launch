'use server';

import { HomePage } from '@shared/config/routes';
import { trackEvent } from '@shared/services/analytics/node';
import { signOut } from '@shared/services/auth';
import { db } from '@shared/services/db';

import { DeleteAccountUseCaseDto, DeleteAccountUseCaseDtoSchema } from '../lib/schemas';
import { DeleteAccountUseCase } from '../model/delete-account-use-case';

const useCase = new DeleteAccountUseCase({
  db,
});

export const deleteAccountAction = async (formData: FormData) => {
  const data = {
    userId: String(formData.get('userId')),
  } satisfies DeleteAccountUseCaseDto;

  const cleaned = DeleteAccountUseCaseDtoSchema.safeParse(data);
  if (!cleaned.success) throw new Error('Invalid data');

  const result = await useCase.execute(cleaned.data);
  if (result.isFail()) throw new Error(result.error());

  await trackEvent('account:deleted', {
    props: data,
  });

  await signOut({ redirectTo: HomePage().url });
};
