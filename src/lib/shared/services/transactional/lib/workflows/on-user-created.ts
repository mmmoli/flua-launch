import { workflow as define } from '@novu/framework';
import { z } from 'zod';

import { render, WelcomeUserSchema } from '../../ui/emails/welcome-user';
import { WorkflowId } from '../transactional-types';

export const workflowId: WorkflowId = 'on-user-created';
export const payloadSchema = WelcomeUserSchema;

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
          subject: z.string().default('Welcome to Flua'),
        }),
      }
    );
  },
  {
    payloadSchema,
  }
);
