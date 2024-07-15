import packageJson from '../../../../../package.json';
import { config } from './lib';

type PlausibleEventName = String;

interface PlausibleRevenueEvent {
  currency: 'GBP';
  amount: number;
}

interface PlausibleEventOptions {
  url?: string;
  domain?: string;
  referrer?: string;
  props?: Record<string, unknown>;
  revenue?: PlausibleRevenueEvent;
}

export interface TrackEvent {
  (eventName: PlausibleEventName, options?: PlausibleEventOptions): Promise<void>;
}

export const trackEvent: TrackEvent = async (
  eventName,
  options = {
    url: 'api:///',
    domain: config.domain,
    referrer: 'api',
    props: {},
  }
) => {
  const url = new URL('/api/event', config.customDomain ?? 'https://plausible.io');
  const revenue = options.revenue
    ? {
        currency: options.revenue.currency,
        amount: options.revenue.amount.toString(),
      }
    : {};
  const body = JSON.stringify({ name: eventName, ...options, ...revenue });
  const resp = await fetch(url, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': `API-${packageJson.version}`,
    },
  });
};
