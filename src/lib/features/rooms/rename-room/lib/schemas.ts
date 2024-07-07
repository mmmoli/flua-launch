import { roomTiers } from '@shared/services/db/schema';
import { z } from 'zod';

export const renameRoomUseCaseDtoSchema = z.object({
  roomId: z.string().min(3),
  name: z.string().min(3, {
    message: 'Too Short. Try making the name more descriptive.',
  }),
  userId: z.string().min(3),
});

export type RenameRoomUseCaseDto = z.infer<typeof renameRoomUseCaseDtoSchema>;
