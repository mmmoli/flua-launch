import { client } from '../model/client';
import { Events } from '../model/event-types';

export interface PublishParams<T extends keyof Events> {
  url: URL;
  body: Events[T];
}

export const publish = <T extends keyof Events>({ url, ...rest }: PublishParams<T>) =>
  client.publishJSON({
    url: url.toString(),
    ...rest,
  });
