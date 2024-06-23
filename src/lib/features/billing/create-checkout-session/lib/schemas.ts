import { z } from 'zod';

export const CreateCheckoutSessionUseCaseDtoSchema = z.object({
  priceId: z.string(),
});

export type CreateCheckoutSessionUseCaseDto = z.infer<typeof CreateCheckoutSessionUseCaseDtoSchema>;
