import { client } from '../model/client';
import { Events } from '../model/event-types';

export const publish = <T extends keyof Events>(eventName: T, params: Events[T]) =>
  client.publishJSON({
    topic: eventName,
    body: params,
  });
