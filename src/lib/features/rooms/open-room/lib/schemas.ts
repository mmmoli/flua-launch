import { roomTiers } from '@shared/services/db/schema';
import { z } from 'zod';

export const OpenRoomUseCaseDtoSchema = z.object({
  name: z.string().min(3, {
    message: 'Too Short. Try making the name more descriptive.',
  }),
  ownerId: z.string().min(3),
  tier: z.enum(roomTiers).default('FREE').optional(),
});

export type OpenRoomUseCaseDto = z.infer<typeof OpenRoomUseCaseDtoSchema>;
