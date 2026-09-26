export type TrackSource = {
  type: "mp3" | "soundcloud" | "spotify" | "mixcloud";
  url: string;
};

export type Track = {
  id: string;
  title: string;
  genre: string;
  duration?: string;
  source?: TrackSource;
  placeholder: boolean;
};

/** No real tracks supplied yet — UI ready for future sources. */
export const tracks: Track[] = [];
