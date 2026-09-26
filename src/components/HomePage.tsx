"use client";

import { AmbientBackground, GrainOverlay } from "@/components/layout/AmbientBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/layout/PageLoader";
import { StickyBookingBar } from "@/components/layout/StickyBookingBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { Hero } from "@/components/sections/Hero";
import { MusicSection } from "@/components/sections/MusicSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SupportArtists } from "@/components/sections/SupportArtists";
import type { Dictionary, Locale } from "@/data/translations";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  return (
    <>
      <PageLoader
        label={dictionary.loader.label}
        loadingLabel={dictionary.loader.loading}
      />
      <AmbientBackground />
      <GrainOverlay />
      <CustomCursor />
      <Navbar locale={locale} dictionary={dictionary} />
      <main id="main" className="relative z-10">
        <Hero dictionary={dictionary} />
        <ExperienceSection dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <SupportArtists dictionary={dictionary} />
        <MusicSection dictionary={dictionary} />
        <ServicesSection dictionary={dictionary} />
        <EventsSection dictionary={dictionary} />
        <GallerySection dictionary={dictionary} />
        <BookingSection dictionary={dictionary} />
        <ContactSection dictionary={dictionary} />
      </main>
      <Footer locale={locale} dictionary={dictionary} />
      <StickyBookingBar dictionary={dictionary} />
    </>
  );
}
