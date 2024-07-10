import * as Sentry from '@sentry/nextjs';

import { Logger, LoggingUser } from './logger-types';

export class SentryLogger implements Logger {
  untag(key: string): void {
    Sentry.setTag(key, undefined);
  }

  tag(key: string, value: string): void {
    Sentry.setTag(key, value);
  }

  unidentify(): void {
    Sentry.setUser(null);
  }

  identify(user: LoggingUser): void {
    Sentry.setUser(user);
  }

  log(msg: any): void {
    Sentry.captureMessage(msg);
  }

  error(err: unknown): void {
    Sentry.captureException(err);
  }
}
