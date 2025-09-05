import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";
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
  const navVisible = useSignal(false);
  const mobileMenuOpen = useSignal(false);

  useOnWindow('scroll', $(() => {
    navVisible.value = window.scrollY > 450; // Adjust threshold as needed
  }));

  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden scroll-smooth">
      {/* Musical background elements */}
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-20 h-20 bg-amber-500 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute top-1/4 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-600 rounded-full opacity-25 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-10 w-12 h-12 bg-amber-400 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Navigation Menu */}
      <nav class={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 transition-opacity duration-300 ${navVisible.value ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div class="max-w-6xl mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <a href="#hero" class="flex items-center text-xl md:text-2xl font-bold text-white hover:text-amber-300 transition-colors">
              <img
                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%3e%3ccircle%20cx='24'%20cy='24'%20r='20'%20fill='%23f59e0b'/%3e%3ctext%20x='24'%20y='30'%20text-anchor='middle'%20fill='white'%20font-family='Arial'%20font-size='20'%20font-weight='bold'%3eJB%3c/text%3e%3c/svg%3e"
                alt="Jon Blanck"
                width="48"
                height="48"
                class="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-3 border-2 border-amber-500/30"
              />
              <span class="hidden sm:inline">JON BLANCK MUSIC</span>
              <span class="sm:hidden">JON BLANCK</span>
            </a>
            
            {/* Desktop Menu */}
            <div class="hidden md:flex space-x-8">
              <a href="#hero" class="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#music" class="text-white/80 hover:text-white transition-colors">Music</a>
              <a href="#lessons" class="text-white/80 hover:text-white transition-colors">Lessons</a>              
              <a href="#contact" class="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              class="md:hidden flex flex-col items-center justify-center w-8 h-8 text-white"
              onClick$={() => mobileMenuOpen.value = !mobileMenuOpen.value}
            >
              <span class={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen.value ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span class={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${mobileMenuOpen.value ? 'opacity-0' : ''}`}></span>
              <span class={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${mobileMenuOpen.value ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div class={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen.value ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div class="py-4 space-y-2">
              <a 
                href="#hero" 
                class="block text-white/80 hover:text-white transition-colors py-2"
                onClick$={() => mobileMenuOpen.value = false}
              >
                Home
              </a>
              <a 
                href="#music" 
                class="block text-white/80 hover:text-white transition-colors py-2"
                onClick$={() => mobileMenuOpen.value = false}
              >
                Music
              </a>
              <a 
                href="#lessons" 
                class="block text-white/80 hover:text-white transition-colors py-2"
                onClick$={() => mobileMenuOpen.value = false}
              >
                Lessons
              </a>
              <a 
                href="#contact" 
                class="block text-white/80 hover:text-white transition-colors py-2"
                onClick$={() => mobileMenuOpen.value = false}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="relative z-10 p-4 pt-20">
        <div class="max-w-6xl mx-auto">
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
      content: "Chart-topping jazz saxophonist, versatile keyboardist, and dedicated music educator. Offering professional performance, recording, and comprehensive music instruction in Seymour, CT.",
    },
    {
      name: "keywords",
      content: "Jon Blanck, jazz saxophonist, keyboardist, music lessons, Seymour CT, Verve Jazz Ensemble, music education, saxophone lessons, piano lessons",
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
      content: "Chart-topping jazz artist and comprehensive music educator offering performance and instruction services.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
};
