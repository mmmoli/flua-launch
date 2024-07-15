import { QstashError } from '@upstash/qstash';

import { client } from './client';
import { topicConfig } from './topics';

const topics = client.topics;

try {
  Promise.allSettled(
    topicConfig.forEach((def) =>
      topics.addEndpoints({
        name: 'testTopic',
        endpoints: [
          { name: 'endpoint1', url: 'https://example.com' },
          { name: 'endpoint2', url: 'https://somewhere-else.com' },
        ],
      })
    )
  );

  console.table(await topics.list());
} catch (err) {
  const error = err as QstashError;
  console.error(error.message);
}
