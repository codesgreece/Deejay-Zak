export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  city: string;
  image?: string;
  url?: string;
};

/** Real events will be added here. Empty until announced. */
export const events: Event[] = [];
