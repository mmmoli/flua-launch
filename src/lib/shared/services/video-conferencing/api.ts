import * as HMS from '@100mslive/server-sdk';
import { env } from '@shared/config/env';

import { HMSRoomService } from './lib/HMS-room-service';

export const roomService = new HMSRoomService({
  client: new HMS.SDK(env.HMS_ACCESS_KEY, env.HMS_SECRET),
});
