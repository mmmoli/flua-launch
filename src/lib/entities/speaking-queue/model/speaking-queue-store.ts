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

export const useSpeakingQueueStore = create<State & Actions>()(
  immer((set) => ({
    queue: [],

    join: (user: User) =>
      set((state) => {
        const newQueue = filterUniqueParticipants([...state.queue, { ...user, muted: true }]);
        newQueue[0].muted = false;
        state.queue = newQueue;
      }),

    leave: (user: User) =>
      set((state) => {
        const newQueue = state.queue
          .filter((u) => u.id !== user.id)
          .map((u) => ({ ...u, muted: true }));

        if (newQueue.length > 0) {
          newQueue[0].muted = false;
        }

        state.queue = newQueue;
      }),
  }))
);
