import { User } from '@shared/services/auth/client';

export interface Participant extends User {
  muted: boolean;
}

export type { User };
