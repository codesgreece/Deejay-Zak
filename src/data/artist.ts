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
} as const;

export type Artist = typeof artist;
