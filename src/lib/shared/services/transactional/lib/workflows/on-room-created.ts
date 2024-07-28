import { workflow as define } from '@novu/framework';
import { z } from 'zod';

import { render, RoomCreatedSchema } from '../../ui/emails/room-created';
import { WorkflowId } from '../transactional-types';

export const workflowId: WorkflowId = 'on-room-created';
export const payloadSchema = RoomCreatedSchema;

export const workflow = define(
  workflowId,
  async ({ step, payload }) => {
    await step.email(
      'send-email',
      async (controls) => ({
        subject: controls.subject,
        body: await render(payload),
      }),
      {
        controlSchema: z.object({
          subject: z.string().default('Your Room is ready on Flua'),
        }),
      }
    );
  },
  {
    payloadSchema,
  }
);
