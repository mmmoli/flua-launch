import { z } from 'zod';

const timestampSchema = z.string().transform((val) => new Date(val));

const baseDataSchema = z.object({
  room_id: z.string(),
  room_name: z.string(),
  session_id: z.string(),
  template_id: z.string(),
  session_started_at: timestampSchema,
});

const sessionCloseSuccessDataSchema = baseDataSchema.extend({
  session_stopped_at: timestampSchema,
  session_duration: z.number(),
});

const sessionOpenSuccessDataSchema = baseDataSchema;

const sessionCloseSuccessSchema = z.object({
  id: z.string(),
  account_id: z.string(),
  app_id: z.string(),
  timestamp: timestampSchema,
  type: z.literal('session.close.success'),
  data: sessionCloseSuccessDataSchema,
});

const sessionOpenSuccessSchema = z.object({
  id: z.string(),
  account_id: z.string(),
  app_id: z.string(),
  timestamp: timestampSchema,
  type: z.literal('session.open.success'),
  data: sessionOpenSuccessDataSchema,
});

const peerLeaveSuccessDataSchema = z.object({
  duration: z.number(),
  joined_at: timestampSchema,
  left_at: timestampSchema,
  peer_id: z.string().uuid(),
  reason: z.string(),
  message: z.string().optional(),
  role: z.string(),
  room_id: z.string(),
  room_name: z.string(),
  session_id: z.string(),
  template_id: z.string(),
  user_id: z.string().optional(),
  user_name: z.string(),
  user_data: z.string(),
  session_started_at: timestampSchema,
});

// Define the peer join success data schema
const peerJoinSuccessDataSchema = z.object({
  joined_at: timestampSchema,
  peer_id: z.string(),
  role: z.string(),
  room_id: z.string(),
  room_name: z.string(),
  session_id: z.string(),
  template_id: z.string(),
  user_id: z.string().optional(),
  user_name: z.string(),
  user_data: z.string(),
  session_started_at: timestampSchema,
});

// Define the peer leave success event schema
const peerLeaveSuccessSchema = z.object({
  version: z.string(),
  id: z.string(),
  account_id: z.string(),
  app_id: z.string(),
  timestamp: timestampSchema,
  type: z.literal('peer.leave.success'),
  data: peerLeaveSuccessDataSchema,
});

// Define the peer join success event schema
const peerJoinSuccessSchema = z.object({
  version: z.string(),
  id: z.string(),
  account_id: z.string(),
  app_id: z.string(),
  timestamp: timestampSchema,
  type: z.literal('peer.join.success'),
  data: peerJoinSuccessDataSchema,
});

export const eventSchema = z.discriminatedUnion('type', [
  sessionCloseSuccessSchema,
  sessionOpenSuccessSchema,
  peerLeaveSuccessSchema,
  peerJoinSuccessSchema,
]);

export type HMSWebhookEvent = z.infer<typeof eventSchema>;
export type HMSWebhookEventType = HMSWebhookEvent['type'];
