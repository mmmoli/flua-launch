export interface Person {
  id: string;
}

export interface Participant extends Person {
  muted: boolean;
}
