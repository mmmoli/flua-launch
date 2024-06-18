import { z } from 'zod';

export const CloseRoomUseCaseDtoSchema = z.object({
  roomId: z.string().min(1).max(100),
  userId: z.string().min(1).max(100),
});

export type CloseRoomUseCaseDto = z.infer<typeof CloseRoomUseCaseDtoSchema>;
