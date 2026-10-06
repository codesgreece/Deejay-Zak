export type ServiceId =
  | "weddings"
  | "baptisms"
  | "receptions"
  | "parties"
  | "clubs"
  | "bars"
  | "hotels"
  | "vip"
  | "private"
  | "crete"
  | "greece";

export type Service = {
  id: ServiceId;
  imageAccent: "magenta" | "violet" | "mixed";
  image: string;
  imageAlt: {
    el: string;
    en: string;
  };
};

export const services: Service[] = [
  {
    id: "weddings",
    imageAccent: "magenta",
    image: "/services/weddings.jpg",
    imageAlt: { el: "Γάμος", en: "Wedding celebration" },
  },
  {
    id: "baptisms",
    imageAccent: "violet",
    image: "/services/baptisms.jpg",
    imageAlt: { el: "Βάπτιση", en: "Baptism ceremony" },
  },
  {
    id: "receptions",
    imageAccent: "mixed",
    image: "/services/receptions.jpg",
    imageAlt: { el: "Δεξίωση", en: "Reception event" },
  },
  {
    id: "parties",
    imageAccent: "magenta",
    image: "/services/parties.jpg",
    imageAlt: { el: "Party", en: "Party celebration" },
  },
  {
    id: "clubs",
    imageAccent: "violet",
    image: "/services/clubs.jpg",
    imageAlt: { el: "Club night", en: "Club night" },
  },
  {
    id: "bars",
    imageAccent: "mixed",
    image: "/services/bars.jpg",
    imageAlt: { el: "Bar nightlife", en: "Bar nightlife" },
  },
  {
    id: "hotels",
    imageAccent: "violet",
    image: "/services/hotels.jpg",
    imageAlt: { el: "Hotel event", en: "Hotel event" },
  },
  {
    id: "vip",
    imageAccent: "magenta",
    image: "/services/vip.jpg",
    imageAlt: { el: "VIP party", en: "VIP party" },
  },
  {
    id: "private",
    imageAccent: "mixed",
    image: "/services/private.jpg",
    imageAlt: { el: "Private event", en: "Private event" },
  },
];

export const eventTypeIds = [
  "wedding",
  "baptism",
  "reception",
  "club",
  "bar",
  "hotel",
  "vip",
  "private",
  "other",
] as const;

export type EventTypeId = (typeof eventTypeIds)[number];
