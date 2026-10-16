export const artist = {
  name: "Deejay Zak",
  shortName: "ZAK",
  initials: "DZ",
  experienceYears: 20,
  location: "Crete, Greece",
  coverage: {
    primary: "Crete",
    secondary: "Greece",
  },
  email: "zaxarioudakis18z@gmail.com",
  phone: "6934867200",
  phoneTel: "+306934867200",
  education: "Music Technology and Sound Engineering",
  educationShort: "Music Technology & Sound Engineering",
  /** Official promotional portrait — provided by the artist */
  image: "/artist/deejay-zak.jpg",
  imageAlt: "Deejay Zak performing at the DJ booth",
} as const;

export type Artist = typeof artist;
