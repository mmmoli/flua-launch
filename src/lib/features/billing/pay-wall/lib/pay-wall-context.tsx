import { createContext, Dispatch, SetStateAction } from 'react';

export interface PaywallContext {
  hasActiveSubscription: boolean | undefined;
}

export const Context = createContext<PaywallContext>({ hasActiveSubscription: false });
