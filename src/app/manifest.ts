import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deejay Zak",
    short_name: "Deejay Zak",
    description:
      "Professional DJ in Crete & Greece — 20 years of music.",
    start_url: "/el",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#10051A",
    lang: "el",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
