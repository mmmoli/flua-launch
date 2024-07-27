'use client';

import { z } from 'zod';

export const waitingRoomFormSchema = z.object({
  roomCode: z.string().trim().min(4),
  displayName: z.string().trim().min(3).max(30),
});

export type WaitingRoomFormSchema = z.infer<typeof waitingRoomFormSchema>;
