import { client, liveblocks, WithLiveblocks } from '@shared/services/realtime';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { filterUniqueParticipants } from '../lib/filter-unique-participants';
import { Participant, User } from './speaking-queue-types';

export type State = {
  queue: Participant[];
};

export type Actions = {
  join: (user: User) => void;
  leave: (user: User) => void;
};

export const useSpeakingQueueStore = create<WithLiveblocks<State & Actions>>()(
  immer(
    liveblocks(
      (set) => ({
        queue: [],

        join: (user: User) =>
          set((state) => {
            const newQueue = filterUniqueParticipants([...state.queue, { ...user, muted: true }]);
            if (newQueue.length > 0) {
              newQueue[0].muted = false;
            }
            state.queue = [...newQueue];
          }),

        leave: (user: User) =>
          set((state) => {
            const filteredQueue = state.queue.filter((u) => u.id !== user.id);
            const newQueue = filteredQueue.map((u, index) => ({ ...u, muted: index !== 0 }));
            state.queue = [...newQueue];
          }),
      }),
      {
        client,
        storageMapping: {
          queue: true,
        },
      }
    )
  )
);
