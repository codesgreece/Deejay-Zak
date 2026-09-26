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
};

export const services: Service[] = [
  { id: "weddings", imageAccent: "magenta" },
  { id: "baptisms", imageAccent: "violet" },
  { id: "receptions", imageAccent: "mixed" },
  { id: "parties", imageAccent: "magenta" },
  { id: "clubs", imageAccent: "violet" },
  { id: "bars", imageAccent: "mixed" },
  { id: "hotels", imageAccent: "violet" },
  { id: "vip", imageAccent: "magenta" },
  { id: "private", imageAccent: "mixed" },
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
