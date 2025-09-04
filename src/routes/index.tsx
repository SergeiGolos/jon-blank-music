import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Musical background elements */}
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-20 h-20 bg-amber-500 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute top-1/4 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-600 rounded-full opacity-25 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-10 w-12 h-12 bg-amber-400 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div class="relative z-10 p-4">
        <div class="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div class="text-center py-20">
            <h1 class="text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Jon Blanck
            </h1>
            <p class="text-2xl text-amber-200 mb-4 font-light">
              Saxophonist • Keyboardist • Composer • Educator
            </p>
            <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chart-topping jazz artist, versatile multi-instrumentalist, and dedicated music educator 
              bringing over two decades of professional experience across jazz, funk, classical, and contemporary music.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
              <a href="/lessons" class="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                Book Lessons
              </a>
              <a href="/music" class="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20">
                Listen to Music
              </a>
              <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                Contact Jon
              </a>
            </div>
          </div>

          {/* Achievements Section */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">Chart-Topping Success</h2>
            <p class="text-center text-white/90 mb-8">
              Music Director, Composer & Arranger for the Verve Jazz Ensemble
            </p>
            
            <div class="grid md:grid-cols-4 gap-6">
              <div class="bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-amber-500/30">
                <div class="text-4xl font-bold text-amber-300 mb-2">#1</div>
                <h4 class="text-white font-semibold mb-2">Connect The Dots</h4>
                <p class="text-white/70 text-sm">USA Jazz Radio Charts</p>
                <p class="text-white/60 text-xs">2018</p>
              </div>
              <div class="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-blue-500/30">
                <div class="text-4xl font-bold text-blue-300 mb-2">#5</div>
                <h4 class="text-white font-semibold mb-2">It's About Time</h4>
                <p class="text-white/70 text-sm">USA Jazz Radio Charts</p>
                <p class="text-white/60 text-xs">2013</p>
              </div>
              <div class="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-indigo-500/30">
                <div class="text-4xl font-bold text-indigo-300 mb-2">#6</div>
                <h4 class="text-white font-semibold mb-2">Night Mode</h4>
                <p class="text-white/70 text-sm">USA Jazz Radio Charts</p>
                <p class="text-white/60 text-xs">2019</p>
              </div>
              <div class="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-purple-500/30">
                <div class="text-4xl font-bold text-purple-300 mb-2">#8</div>
                <h4 class="text-white font-semibold mb-2">East End Sojourn</h4>
                <p class="text-white/70 text-sm">USA Jazz Radio Charts</p>
                <p class="text-white/60 text-xs">2016</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div class="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Performance */}
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <div class="text-4xl mb-4 text-center">🎷</div>
              <h3 class="text-2xl font-bold text-white mb-4 text-center">Performance</h3>
              <ul class="text-white/80 space-y-2 mb-6">
                <li>• Jazz ensembles & big bands</li>
                <li>• Funk & R&B groups</li>
                <li>• Classical orchestras</li>
                <li>• Wedding & event bands</li>
                <li>• Session recording</li>
              </ul>
              <p class="text-white/70 text-sm text-center">
                Available for performances, recording sessions, and collaborations across all genres.
              </p>
            </div>

            {/* Education */}
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <div class="text-4xl mb-4 text-center">🎓</div>
              <h3 class="text-2xl font-bold text-white mb-4 text-center">Music Education</h3>
              <ul class="text-white/80 space-y-2 mb-6">
                <li>• Saxophone & woodwinds</li>
                <li>• Piano & keyboards</li>
                <li>• Music theory & improvisation</li>
                <li>• Composition & arranging</li>
                <li>• Music production</li>
              </ul>
              <p class="text-white/70 text-sm text-center">
                Comprehensive instruction for all ages and skill levels, in-person and online.
              </p>
            </div>

            {/* Recording */}
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <div class="text-4xl mb-4 text-center">🎵</div>
              <h3 class="text-2xl font-bold text-white mb-4 text-center">Recording & Composition</h3>
              <ul class="text-white/80 space-y-2 mb-6">
                <li>• Original compositions</li>
                <li>• Musical arrangements</li>
                <li>• Studio recordings</li>
                <li>• EPK development</li>
                <li>• 40+ album credits</li>
              </ul>
              <p class="text-white/70 text-sm text-center">
                Professional recording, arranging, and composition services for artists and productions.
              </p>
            </div>
          </div>

          {/* Experience Highlight */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <h3 class="text-2xl font-bold text-white mb-6 text-center">Professional Experience</h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold text-amber-300 mb-3">Performance Credits</h4>
                <ul class="text-white/80 space-y-2">
                  <li>• Peter Bernstein (Jazz Guitar Legend)</li>
                  <li>• P-Funk Allstars (Funk Icons)</li>
                  <li>• New Haven Symphony Orchestra</li>
                  <li>• Ridgefield Symphony Orchestra</li>
                  <li>• Elite wedding & event ensembles</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-amber-300 mb-3">Teaching & Recording</h4>
                <ul class="text-white/80 space-y-2">
                  <li>• Wilton Conservatory of Music</li>
                  <li>• 40+ album recording credits</li>
                  <li>• PBS network recordings</li>
                  <li>• Private studio in Seymour, CT</li>
                  <li>• Remote lessons available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div class="text-center py-8">
            <p class="text-white/60 mb-4">Based in Seymour, Connecticut • Serving students and clients worldwide</p>
            <p class="text-white/40">© 2025 Jon Blanck Music. All rights reserved.</p>
          </div>
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
