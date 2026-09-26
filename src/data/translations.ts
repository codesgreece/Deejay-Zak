export type Locale = "el" | "en";

export const locales: Locale[] = ["el", "en"];
export const defaultLocale: Locale = "el";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const el = {
  meta: {
    title: "Deejay Zak | Επαγγελματίας DJ στην Κρήτη & Ελλάδα",
    description:
      "Deejay Zak — 20 χρόνια επαγγελματικής παρουσίας. DJ για γάμους, βαφτίσεις, clubs, hotels και VIP parties στην Κρήτη και σε όλη την Ελλάδα.",
  },
  nav: {
    home: "Αρχική",
    about: "Σχετικά",
    music: "Μουσική",
    events: "Εμφανίσεις",
    gallery: "Gallery",
    services: "Υπηρεσίες",
    contact: "Επικοινωνία",
    bookNow: "ΚΛΕΙΣΕ ΤΩΡΑ",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
  },
  hero: {
    eyebrow: "20 ΧΡΟΝΙΑ ΜΟΥΣΙΚΗΣ",
    titleLine1: "DEEJAY",
    titleLine2: "ZAK",
    subtitle:
      "20 χρόνια επαγγελματικής παρουσίας στη μουσική, με βάση την Κρήτη και εμφανίσεις σε όλη την Ελλάδα.",
    ctaPrimary: "ΚΛΕΙΣΕ ΗΜΕΡΟΜΗΝΙΑ",
    ctaSecondary: "ΔΕΣ ΤΟΝ ZAK LIVE",
    scroll: "SCROLL",
  },
  experience: {
    line1: "20 ΧΡΟΝΙΑ.",
    line2: "ΜΙΑ ΖΩΗ ΜΕ ΤΗ ΜΟΥΣΙΚΗ.",
    body:
      "Ο Deejay Zak δραστηριοποιείται επαγγελματικά στη μουσική για 20 χρόνια. Εμφανίζεται σε όλη την Κρήτη και σε όλη την Ελλάδα όταν απαιτείται.",
    educationLabel: "Σπουδές",
    education: "Music Technology & Sound Engineering",
    yearsLabel: "Χρόνια",
    baseLabel: "Βάση",
    baseValue: "Κρήτη",
    coverageLabel: "Κάλυψη",
    coverageValue: "Ελλάδα",
    marquee: "DEEJAY ZAK — 20 YEARS OF MUSIC — CRETE — GREECE —",
  },
  about: {
    title: "Ο DJ",
    heading: "Μουσικές εμπειρίες προσαρμοσμένες σε κάθε στιγμή",
    body:
      "Με 20 χρόνια επαγγελματικής εμπειρίας, ο Deejay Zak δημιουργεί μουσικές εμπειρίες που προσαρμόζονται στον χώρο, στο κοινό και στη μοναδικότητα κάθε event.",
    points: {
      experience: "20 χρόνια επαγγελματικής εμπειρίας",
      location: "Βάση στην Κρήτη",
      coverage: "Εμφανίσεις σε όλη την Ελλάδα",
      education: "Music Technology & Sound Engineering",
    },
  },
  support: {
    title: "SUPPORT ACTS",
    intro: "Έχει πραγματοποιήσει support εμφανίσεις για:",
  },
  music: {
    title: "ΜΟΥΣΙΚΗ",
    heading: "Ο ήχος του Zak",
    comingSoon: "Τα tracks θα προστεθούν σύντομα.",
    placeholderTitle: "Coming Soon",
    placeholderGenre: "House / Techno / Open Format",
    play: "PLAY",
    pause: "PAUSE",
    platforms: "Σύντομα σε πλατφόρμες",
  },
  services: {
    title: "ΥΠΗΡΕΣΙΕΣ",
    heading: "ΜΟΥΣΙΚΗ ΓΙΑ ΚΑΘΕ ΠΕΡΙΣΤΑΣΗ",
    cta: "ΚΛΕΙΣΕ",
    items: {
      weddings: {
        name: "Γάμοι",
        description: "Μουσική ατμόσφαιρα που ακολουθεί τον ρυθμό της ημέρας σας.",
      },
      baptisms: {
        name: "Βαφτίσεις",
        description: "Κομψή και ζεστή μουσική παρουσία για οικογενειακές στιγμές.",
      },
      receptions: {
        name: "Δεξιώσεις",
        description: "Ροή από κοκτέιλ έως dancefloor, με απόλυτο έλεγχο ενέργειας.",
      },
      parties: {
        name: "Parties",
        description: "Υψηλή ενέργεια και επιλογές που κρατούν το κοινό ενεργό.",
      },
      clubs: {
        name: "Clubs",
        description: "Club-ready sets με αίσθηση νύχτας και τεχνολογικής ακρίβειας.",
      },
      bars: {
        name: "Bars",
        description: "Ατμοσφαιρικά sets προσαρμοσμένα στον χαρακτήρα του χώρου.",
      },
      hotels: {
        name: "Hotels",
        description: "Premium μουσική παρουσία για hotel events και ιδιωτικές βραδιές.",
      },
      vip: {
        name: "VIP Parties",
        description: "Αποκλειστικές εμπειρίες με διακριτική πολυτέλεια και ένταση.",
      },
      private: {
        name: "Private Events",
        description: "Προσωποποιημένα sets για ιδιωτικές εκδηλώσεις κάθε κλίμακας.",
      },
    },
  },
  events: {
    title: "ΕΜΦΑΝΙΣΕΙΣ",
    heading: "EVENTS",
    emptyTitle: "EVENTS COMING SOON",
    emptyBody: "Οι επόμενες εμφανίσεις θα ανακοινωθούν σύντομα.",
  },
  gallery: {
    title: "GALLERY",
    heading: "Στιγμές στη σκηνή",
    note: "Οι φωτογραφίες θα προστεθούν σύντομα. Τα πλαίσια είναι έτοιμα για πραγματικό υλικό.",
    view: "VIEW",
    close: "Κλείσιμο",
    prev: "Προηγούμενο",
    next: "Επόμενο",
    captions: {
      booth: "DJ Booth",
      crowd: "Crowd Energy",
      wedding: "Wedding Atmosphere",
      venue: "Venue Lights",
      nightlife: "Nightlife",
      vip: "VIP Night",
      event: "Event Night",
      lights: "Stage Lights",
    },
    placeholderLabel: "Placeholder",
  },
  booking: {
    title: "BOOKING",
    heading: "Η ΕΠΟΜΕΝΗ ΣΑΣ ΕΚΔΗΛΩΣΗ ΞΕΚΙΝΑ ΕΔΩ.",
    cta: "BOOK DEEJAY ZAK",
    stickyCta: "ΚΛΕΙΣΕ ΗΜΕΡΟΜΗΝΙΑ",
    form: {
      name: "Όνομα",
      email: "Email",
      phone: "Τηλέφωνο",
      eventType: "Τύπος εκδήλωσης",
      eventDate: "Ημερομηνία",
      location: "Τοποθεσία",
      guests: "Αριθμός καλεσμένων",
      message: "Μήνυμα",
      submit: "ΑΠΟΣΤΟΛΗ ΑΙΤΗΜΑΤΟΣ",
      submitting: "Αποστολή...",
      selectEvent: "Επιλέξτε τύπο",
      successTitle: "Το αίτημα καταγράφηκε",
      successBody:
        "Η φόρμα είναι έτοιμη για σύνδεση με email/backend. Επικοινωνήστε απευθείας στο email ή τηλέφωνο για άμεση κράτηση.",
      errorTitle: "Κάτι πήγε στραβά",
      errorBody: "Δοκιμάστε ξανά ή επικοινωνήστε απευθείας μαζί μας.",
      required: "Υποχρεωτικό πεδίο",
      invalidEmail: "Μη έγκυρο email",
      invalidPhone: "Μη έγκυρο τηλέφωνο",
    },
    eventTypes: {
      wedding: "Γάμος",
      baptism: "Βάπτιση",
      reception: "Δεξίωση",
      club: "Club",
      bar: "Bar",
      hotel: "Hotel",
      vip: "VIP Party",
      private: "Private Event",
      other: "Άλλο",
    },
  },
  contact: {
    title: "ΕΠΙΚΟΙΝΩΝΙΑ",
    heading: "Ας μιλήσουμε για το event σας",
    availability: "Διαθέσιμος σε όλη την Κρήτη και σε όλη την Ελλάδα όταν απαιτείται.",
    callNow: "ΚΑΛΕΣΕ ΤΩΡΑ",
    email: "EMAIL",
    book: "ΚΛΕΙΣΕ ΗΜΕΡΟΜΗΝΙΑ",
    emailLabel: "Email",
    phoneLabel: "Τηλέφωνο",
  },
  footer: {
    tagline: "20 YEARS OF MUSIC",
    rights: "© 2026 Deejay Zak. All rights reserved.",
    language: "Γλώσσα",
  },
  cursor: {
    view: "VIEW",
    open: "OPEN",
    play: "PLAY",
    book: "BOOK",
  },
  loader: {
    label: "DEEJAY ZAK",
    loading: "LOADING",
  },
  a11y: {
    skipToContent: "Μετάβαση στο περιεχόμενο",
    languageSwitch: "Αλλαγή γλώσσας",
  },
  social: {
    title: "SOCIAL",
    comingSoon: "Τα links θα ενεργοποιηθούν όταν είναι διαθέσιμα.",
  },
} as const;

const en = {
  meta: {
    title: "Deejay Zak | Professional DJ in Crete & Greece",
    description:
      "Deejay Zak — 20 years of professional experience. DJ for weddings, baptisms, clubs, hotels and VIP parties across Crete and Greece.",
  },
  nav: {
    home: "Home",
    about: "About",
    music: "Music",
    events: "Events",
    gallery: "Gallery",
    services: "Services",
    contact: "Contact",
    bookNow: "BOOK NOW",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "20 YEARS OF MUSIC",
    titleLine1: "DEEJAY",
    titleLine2: "ZAK",
    subtitle:
      "20 years of professional experience in music, based in Crete and performing across Greece.",
    ctaPrimary: "BOOK YOUR DATE",
    ctaSecondary: "WATCH ZAK LIVE",
    scroll: "SCROLL",
  },
  experience: {
    line1: "20 YEARS.",
    line2: "A LIFE WITH MUSIC.",
    body:
      "Deejay Zak has been professionally involved in music for 20 years. He performs across Crete and throughout Greece when required.",
    educationLabel: "Education",
    education: "Music Technology & Sound Engineering",
    yearsLabel: "Years",
    baseLabel: "Based in",
    baseValue: "Crete",
    coverageLabel: "Coverage",
    coverageValue: "Greece",
    marquee: "DEEJAY ZAK — 20 YEARS OF MUSIC — CRETE — GREECE —",
  },
  about: {
    title: "THE DJ",
    heading: "Musical experiences shaped for every moment",
    body:
      "With 20 years of professional experience, Deejay Zak creates musical experiences adapted to the venue, the audience and the uniqueness of every event.",
    points: {
      experience: "20 years of professional experience",
      location: "Based in Crete",
      coverage: "Performing across Greece",
      education: "Music Technology & Sound Engineering",
    },
  },
  support: {
    title: "SUPPORT ACTS",
    intro: "Support appearances for:",
  },
  music: {
    title: "MUSIC",
    heading: "The sound of Zak",
    comingSoon: "Tracks will be added soon.",
    placeholderTitle: "Coming Soon",
    placeholderGenre: "House / Techno / Open Format",
    play: "PLAY",
    pause: "PAUSE",
    platforms: "Platforms coming soon",
  },
  services: {
    title: "SERVICES",
    heading: "MUSIC FOR EVERY OCCASION",
    cta: "BOOK",
    items: {
      weddings: {
        name: "Weddings",
        description: "An atmosphere that follows the rhythm of your day.",
      },
      baptisms: {
        name: "Baptisms",
        description: "Warm, elegant music for family celebrations.",
      },
      receptions: {
        name: "Receptions",
        description: "From cocktails to the dancefloor with controlled energy.",
      },
      parties: {
        name: "Parties",
        description: "High-energy selections that keep the room moving.",
      },
      clubs: {
        name: "Clubs",
        description: "Club-ready sets with nightlife precision and presence.",
      },
      bars: {
        name: "Bars",
        description: "Atmospheric sets tuned to the character of the space.",
      },
      hotels: {
        name: "Hotels",
        description: "Premium music presence for hotel events and private nights.",
      },
      vip: {
        name: "VIP Parties",
        description: "Exclusive experiences with discreet luxury and intensity.",
      },
      private: {
        name: "Private Events",
        description: "Tailored sets for private gatherings of every scale.",
      },
    },
  },
  events: {
    title: "EVENTS",
    heading: "EVENTS",
    emptyTitle: "EVENTS COMING SOON",
    emptyBody: "Upcoming appearances will be announced soon.",
  },
  gallery: {
    title: "GALLERY",
    heading: "Moments on stage",
    note: "Photography will be added soon. Frames are ready for real event imagery.",
    view: "VIEW",
    close: "Close",
    prev: "Previous",
    next: "Next",
    captions: {
      booth: "DJ Booth",
      crowd: "Crowd Energy",
      wedding: "Wedding Atmosphere",
      venue: "Venue Lights",
      nightlife: "Nightlife",
      vip: "VIP Night",
      event: "Event Night",
      lights: "Stage Lights",
    },
    placeholderLabel: "Placeholder",
  },
  booking: {
    title: "BOOKING",
    heading: "YOUR NEXT EVENT STARTS HERE.",
    cta: "BOOK DEEJAY ZAK",
    stickyCta: "BOOK YOUR DATE",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      eventType: "Event type",
      eventDate: "Event date",
      location: "Location",
      guests: "Number of guests",
      message: "Message",
      submit: "SEND REQUEST",
      submitting: "Sending...",
      selectEvent: "Select type",
      successTitle: "Request captured",
      successBody:
        "The form is ready for email/backend integration. Contact directly by email or phone for immediate booking.",
      errorTitle: "Something went wrong",
      errorBody: "Please try again or contact us directly.",
      required: "Required field",
      invalidEmail: "Invalid email",
      invalidPhone: "Invalid phone",
    },
    eventTypes: {
      wedding: "Wedding",
      baptism: "Baptism",
      reception: "Reception",
      club: "Club",
      bar: "Bar",
      hotel: "Hotel",
      vip: "VIP Party",
      private: "Private Event",
      other: "Other",
    },
  },
  contact: {
    title: "CONTACT",
    heading: "Let's talk about your event",
    availability: "Available throughout Crete and across Greece when required.",
    callNow: "CALL NOW",
    email: "EMAIL",
    book: "BOOK YOUR DATE",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  footer: {
    tagline: "20 YEARS OF MUSIC",
    rights: "© 2026 Deejay Zak. All rights reserved.",
    language: "Language",
  },
  cursor: {
    view: "VIEW",
    open: "OPEN",
    play: "PLAY",
    book: "BOOK",
  },
  loader: {
    label: "DEEJAY ZAK",
    loading: "LOADING",
  },
  a11y: {
    skipToContent: "Skip to content",
    languageSwitch: "Switch language",
  },
  social: {
    title: "SOCIAL",
    comingSoon: "Links will activate when profiles are available.",
  },
} as const;

export const translations = { el, en } as const;

export type Dictionary = typeof el;

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale] as Dictionary;
}
