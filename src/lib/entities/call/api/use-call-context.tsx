import { useContext } from 'react';

import { Context } from '../lib/call-entity-context';

export const useCallContext = () => {
  return useContext(Context);
};
