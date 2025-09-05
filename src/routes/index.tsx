import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Import all the new components
import HeroSection from "~/components/sections/hero-section";
import ServicesGrid from "~/components/sections/services-grid";
import ExperienceHighlight from "~/components/sections/experience-highlight";
import MusicSection from "~/components/sections/music-section";
import LessonsSection from "~/components/sections/lessons-section";
import ContactSection from "~/components/sections/contact-section";
import Footer from "~/components/sections/footer";
import ChartAlbums from "~/components/sections/music/chart-albums";

export default component$(() => {
  return (
    <div class="relative min-h-screen overflow-hidden scroll-smooth bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Musical background elements */}
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 h-20 w-20 animate-pulse rounded-full bg-amber-500 opacity-20"></div>
        <div class="absolute top-1/4 right-20 h-16 w-16 animate-bounce rounded-full bg-blue-400 opacity-30"></div>
        <div class="absolute bottom-20 left-1/4 h-24 w-24 animate-pulse rounded-full bg-indigo-600 opacity-25"></div>
        <div class="absolute right-10 bottom-1/3 h-12 w-12 animate-bounce rounded-full bg-amber-400 opacity-20"></div>
      </div>

      {/* Navigation Menu */}
      <nav class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div class="mx-auto max-w-6xl px-4 py-4">
          <div class="flex items-center justify-between">
            <a
              href="#hero"
              class="text-2xl font-bold text-white transition-colors hover:text-amber-300"
            >
              Jon Blanck
            </a>
            <div class="hidden space-x-8 md:flex">
              <a
                href="#hero"
                class="text-white/80 transition-colors hover:text-white"
              >
                Home
              </a>
              <a
                href="#music"
                class="text-white/80 transition-colors hover:text-white"
              >
                Music
              </a>
              <a
                href="#lessons"
                class="text-white/80 transition-colors hover:text-white"
              >
                Lessons
              </a>
              <a
                href="#contact"
                class="text-white/80 transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="relative z-10 p-4 pt-20">
        <div class="mx-auto max-w-6xl">
          {/* Hero Section */}
          <HeroSection />

          {/* Achievements Section
          <AchievementsSection /> */}
          {/* Chart Albums */}
          <ChartAlbums />

          {/* Services Grid */}
          <ServicesGrid />

          {/* Experience Highlight */}
          <ExperienceHighlight />

          {/* Music Section */}
          <MusicSection />

          {/* Lessons Section */}
          <LessonsSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jon Blanck - Saxophonist, Keyboardist, Composer & Music Educator",
  meta: [
    {
      name: "description",
      content:
        "Chart-topping jazz saxophonist, versatile keyboardist, and dedicated music educator. Offering professional performance, recording, and comprehensive music instruction in Seymour, CT.",
    },
    {
      name: "keywords",
      content:
        "Jon Blanck, jazz saxophonist, keyboardist, music lessons, Seymour CT, Verve Jazz Ensemble, music education, saxophone lessons, piano lessons",
    },
    {
      name: "author",
      content: "Jon Blanck",
    },
    {
      property: "og:title",
      content: "Jon Blanck - Professional Musician & Educator",
    },
    {
      property: "og:description",
      content:
        "Chart-topping jazz artist and comprehensive music educator offering performance and instruction services.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
};
