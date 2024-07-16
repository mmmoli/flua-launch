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
        name: 'welcome-email',
        url: new URL('/api/webhooks/emails/user-welcome', BASE_URL),
      },
    ],
  },
];
