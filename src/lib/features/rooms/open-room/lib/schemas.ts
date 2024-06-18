import { schema } from '@shared/services/db';
import { z } from 'zod';

// TODO: Refine this schema
export const OpenRoomUseCaseDtoSchema = schema.insertRoomSchema.pick();

export type OpenRoomUseCaseDto = z.infer<typeof OpenRoomUseCaseDtoSchema>;
