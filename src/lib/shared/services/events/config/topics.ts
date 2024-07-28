import { env } from '@shared/config/env';

import { TopicList } from '../model/event-types';

const urlString = env.SITE_DOMAIN ?? env.VERCEL_URL;
if (!urlString) throw new Error('No URL provided');

const BASE_URL = new URL(urlString);

export const topicConfig: TopicList = [
  {
    name: 'USER-CREATED',
    endpoints: [
      {
        name: 'on-user-created:analytics',
        url: new URL('/api/events/on-user-created/analytics', BASE_URL),
      },
      {
        name: 'on-user-created:notifications',
        url: new URL('/api/events/on-user-created/notifications', BASE_URL),
      },
      {
        name: 'on-user-created:default-room',
        url: new URL('/api/events/on-user-created/room', BASE_URL),
      },
    ],
  },
];
