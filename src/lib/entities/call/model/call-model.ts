import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { filterUniqueParticipants } from '../lib/filter-unique-participants';

export type UserId = string;

export interface User {
  id: UserId;
  name: string;
  avatarUrl?: string;
}

export interface Participant extends User {
  muted: boolean;
}

export type State = {
  everyone: Record<UserId, Participant>;
  speakingQueue: Participant[];
};

export type Actions = {
  joinCall: (user: User) => void;
  joinSpeakingQueue: (user: User) => void;
  leaveSpeakingQueue: (user: User) => void;
};

export const useCallStore = create<State & Actions>()(
  immer((set) => ({
    speakingQueue: [],
    everyone: {},
    joinCall: (user: User) =>
      set((state) => {
        state.everyone = {
          ...state.everyone,
          ...{
            [user.id]: { ...user, muted: false },
          },
        };
      }),
    joinSpeakingQueue: (user: User) =>
      set((state) => {
        const newQueue = filterUniqueParticipants([
          ...state.speakingQueue,
          { ...user, muted: true },
        ]);
        newQueue[0].muted = false;
        state.speakingQueue = newQueue;
      }),
    leaveSpeakingQueue: (user: User) =>
      set((state) => {
        const newQueue = state.speakingQueue
          .filter((u) => u.id !== user.id)
          .map((u) => ({ ...u, muted: true }));

        if (newQueue.length > 0) {
          newQueue[0].muted = false;
        }

        state.speakingQueue = newQueue;
      }),
  }))
);
