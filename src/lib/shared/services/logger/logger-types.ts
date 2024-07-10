export interface LoggingUser {
  id?: string;
  email?: string;
}

export interface Logger {
  tag(key: string, value: string): void;
  untag(key: string): void;
  identify(user: LoggingUser): void;
  unidentify(): void;
  log(msg: any): void;
  error(e: Error): void;
}
