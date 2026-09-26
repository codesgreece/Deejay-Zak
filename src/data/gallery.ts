export type GalleryItem = {
  id: string;
  category: "event" | "booth" | "crowd" | "venue" | "wedding" | "vip" | "nightlife";
  captionKey: string;
  /** Placeholder until real photography is provided */
  placeholder: boolean;
  accent: "magenta" | "violet" | "mixed";
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "booth", captionKey: "booth", placeholder: true, accent: "magenta" },
  { id: "g2", category: "crowd", captionKey: "crowd", placeholder: true, accent: "violet" },
  { id: "g3", category: "wedding", captionKey: "wedding", placeholder: true, accent: "mixed" },
  { id: "g4", category: "venue", captionKey: "venue", placeholder: true, accent: "violet" },
  { id: "g5", category: "nightlife", captionKey: "nightlife", placeholder: true, accent: "magenta" },
  { id: "g6", category: "vip", captionKey: "vip", placeholder: true, accent: "mixed" },
  { id: "g7", category: "event", captionKey: "event", placeholder: true, accent: "violet" },
  { id: "g8", category: "booth", captionKey: "lights", placeholder: true, accent: "magenta" },
];
