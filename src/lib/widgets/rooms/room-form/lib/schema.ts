'use client';

import { CreateRoomUseCaseDtoSchema } from '@entities/room';
import { z } from 'zod';

export const roomSchema = CreateRoomUseCaseDtoSchema;
export type RoomSchema = z.infer<typeof roomSchema>;
