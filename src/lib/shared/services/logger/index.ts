import { env } from '@shared/config/env';

import { ConsoleLogger } from './console-logger';
import { SentryLogger } from './sentry-logger';
export type { Logger } from './logger-types';

export const logger =
  env.NEXT_PUBLIC_LOGGER_IMPLEMENTATION === 'sentry' ? new SentryLogger() : new ConsoleLogger();
