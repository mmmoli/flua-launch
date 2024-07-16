import { QstashError } from '@upstash/qstash';

import { topicConfig } from '../config/topics';
import { client } from '../model/client';

const topics = client.topics;

try {
  Promise.all(
    topicConfig.map((def) =>
      topics.addEndpoints({
        name: def.name,
        endpoints: def.endpoints.map((endpoint) => ({
          url: endpoint.url.toString(),
          name: endpoint.name,
        })),
      })
    )
  );

  console.table(await topics.list());
} catch (err) {
  const error = err as QstashError;
  console.error(error.message);
}
