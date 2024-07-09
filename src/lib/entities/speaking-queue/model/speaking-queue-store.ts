import { client, liveblocks, WithLiveblocks } from '@shared/services/realtime';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { filterUniqueParticipants } from '../lib/filter-unique-participants';
import { Participant, Person } from './speaking-queue-types';

export type State = {
  queue: Participant[];
};

export type Actions = {
  join: (person: Person) => void;
  leave: (person: Person) => void;
};

export const useSpeakingQueueStore = create<WithLiveblocks<State & Actions>>()(
  immer(
    liveblocks(
      (set) => ({
        queue: [],

        join: (person: Person) =>
          set((state) => {
            const newQueue: Participant[] = filterUniqueParticipants([
              ...state.queue,
              { ...person, muted: true },
            ]);
            if (newQueue.length > 0) {
              newQueue[0].muted = false;
            }
            state.queue = [...newQueue];
          }),

        leave: (person: Person) =>
          set((state) => {
            const filteredQueue = state.queue.filter((u) => u.id !== person.id);
            const newQueue: Participant[] = filteredQueue.map((u, index) => ({
              ...u,
              muted: index !== 0,
            }));
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
