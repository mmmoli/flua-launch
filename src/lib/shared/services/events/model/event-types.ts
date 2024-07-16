export type Events = {
  'USER-CREATED': {
    id: string;
  };
};

export interface Endpoint {
  name: string;
  url: URL;
}

export interface Topic {
  name: keyof Events;
  endpoints: Endpoint[];
}

export type TopicList = Topic[];
