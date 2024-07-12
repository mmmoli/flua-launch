import { z } from 'zod';

export const DeleteAccountUseCaseDtoSchema = z.object({
  userId: z.string().min(1).max(100),
});

export type DeleteAccountUseCaseDto = z.infer<typeof DeleteAccountUseCaseDtoSchema>;
