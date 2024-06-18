'use client';

import { OpenRoomUseCaseDtoSchema } from '@features/rooms/open-room/lib/schemas';
import { z } from 'zod';

export const roomSchema = OpenRoomUseCaseDtoSchema;
export type RoomSchema = z.infer<typeof roomSchema>;
