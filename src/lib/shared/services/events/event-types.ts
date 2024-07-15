export type Endpoint = URL;

export interface Topic {
  name: string;
  endpoints: Endpoint[];
}

export type TopicList = Topic[];
