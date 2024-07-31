export type Events = {
  'USER-CREATED': {
    user: { id: string; email: string; avatarUrl: string };
  };
};
