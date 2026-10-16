export type TrackSource = {
  type: "mp3" | "soundcloud" | "spotify" | "mixcloud" | "youtube";
  url: string;
};

export type Track = {
  id: string;
  title: string;
  genre: string;
  duration?: string;
  source?: TrackSource;
  /** YouTube video id when source is youtube */
  youtubeId?: string;
  placeholder: boolean;
};

/** Featured / background track — provided by the client */
export const backgroundTrack = {
  id: "unexpected-lovers",
  title: "Unexpected Lovers",
  artist: "DJ Pantelis & Ikonnya",
  genre: "Deep House",
  youtubeId: "eFJk8ckEBfo",
  youtubeUrl: "https://youtu.be/eFJk8ckEBfo",
} as const;

export const tracks: Track[] = [
  {
    id: backgroundTrack.id,
    title: `${backgroundTrack.artist} — ${backgroundTrack.title}`,
    genre: backgroundTrack.genre,
    source: { type: "youtube", url: backgroundTrack.youtubeUrl },
    youtubeId: backgroundTrack.youtubeId,
    placeholder: false,
  },
];
