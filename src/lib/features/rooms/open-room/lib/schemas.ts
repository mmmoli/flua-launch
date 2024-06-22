import { z } from 'zod';

export const OpenRoomUseCaseDtoSchema = z.object({
  name: z.string().min(3, {
    message: 'Too Short. Try making the name more descriptive.',
  }),
  ownerId: z.string().min(3),
});

export type OpenRoomUseCaseDto = z.infer<typeof OpenRoomUseCaseDtoSchema>;
