export type UserId = string;

export interface User {
  id: UserId;
  name: string;
  avatarUrl?: string;
}

export interface Participant extends User {
  muted: boolean;
}
