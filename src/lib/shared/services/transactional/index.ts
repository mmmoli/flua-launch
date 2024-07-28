import { serve } from '@novu/framework/next';

import * as onRoomCreated from './lib/workflows/on-room-created';
import * as onUserCreate from './lib/workflows/on-user-created';

export const workflows = [onRoomCreated, onUserCreate].map((i) => i.workflow);

export const route = serve({ workflows });

export * from './model';
