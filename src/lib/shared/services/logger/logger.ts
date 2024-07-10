import * as Sentry from '@sentry/nextjs';

import { Logger } from './logger-types';

export class SentryLogger implements Logger {
  log(msg: any): void {
    Sentry.captureMessage(msg);
  }

  error(err: unknown): void {
    Sentry.captureException(err);
  }
}
