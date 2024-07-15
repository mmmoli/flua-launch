import Plausible from 'plausible-tracker';

import { config } from './lib';

const plausible = Plausible({
  domain: config.domain,
  trackLocalhost: config.trackLocalhost,
});

type PlausibleTrackEvent = ReturnType<typeof Plausible>['trackEvent'];
type PlausibleEventName = Parameters<PlausibleTrackEvent>[0];
type PlausibleEventOptions = Parameters<PlausibleTrackEvent>[1];
type PlausibleOptions = Parameters<PlausibleTrackEvent>[2];

export interface TrackEvent {
  (
    eventName: PlausibleEventName,
    options?: PlausibleEventOptions,
    eventData?: PlausibleOptions
  ): Promise<void>;
}

export const DEFAULT_EVENT_OPTIONS: NonNullable<PlausibleOptions> = {
  deviceWidth: -1,
  domain: config.domain,
  referrer: 'api',
  url: 'api',
};

export const trackEvent: TrackEvent = (
  eventName: PlausibleEventName,
  options?: PlausibleEventOptions,
  eventData?: PlausibleOptions
) => {
  return new Promise((resolve) => {
    plausible.trackEvent(
      eventName,
      {
        callback: () => {
          options?.callback?.();
          resolve(undefined);
        },
      },
      {
        ...DEFAULT_EVENT_OPTIONS,
        ...eventData,
      }
    );
  });
};