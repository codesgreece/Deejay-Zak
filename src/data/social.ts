export type SocialLink = {
  id: string;
  label: string;
  url?: string;
};

/** Only activate once real profile URLs are supplied. */
export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "youtube", label: "YouTube" },
  { id: "soundcloud", label: "SoundCloud" },
  { id: "mixcloud", label: "Mixcloud" },
];
