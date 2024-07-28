import { client } from '../model/client';
import { Events } from '../model/event-types';

export const publish = <T extends keyof Events>(eventName: T, body: Events[T]) =>
  client.publishJSON({
    urlGroup: eventName,
    body,
  });
