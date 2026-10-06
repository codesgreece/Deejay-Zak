export type SupportArtist = {
  id: string;
  name: string;
  /** Local path under /public — real artist photo */
  image: string;
  imageAlt: string;
};

export const supportArtists: SupportArtist[] = [
  {
    id: "consoul-train",
    name: "Consoul Train",
    image: "/artists/consoul-train.jpg",
    imageAlt: "Consoul Train",
  },
  {
    id: "v-sag",
    name: "V-SAG",
    image: "/artists/v-sag.jpg",
    imageAlt: "V-SAG",
  },
  {
    id: "christian-cambas",
    name: "Christian Cambas",
    image: "/artists/christian-cambas.jpg",
    imageAlt: "Christian Cambas",
  },
  {
    id: "carl-cox",
    name: "Carl Cox",
    image: "/artists/carl-cox.jpg",
    imageAlt: "Carl Cox",
  },
  {
    id: "anna-maria",
    name: "Anna Maria",
    image: "/artists/anna-maria.jpg",
    imageAlt: "Anna Maria",
  },
  {
    id: "david-seaman",
    name: "David Seaman",
    image: "/artists/david-seaman.jpg",
    imageAlt: "David Seaman",
  },
];
