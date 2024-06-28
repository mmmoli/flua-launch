'use client';

import { z } from 'zod';

export const waitingRoomFormSchema = z.object({
  roomCode: z.string().min(4).max(4),
});

export type WaitingRoomFormSchema = z.infer<typeof waitingRoomFormSchema>;
