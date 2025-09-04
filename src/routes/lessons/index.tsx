import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

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
          {/* Header */}
          <div class="text-center py-16">
            <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Music Lessons with Jon Blanck
            </h1>
            <p class="text-xl text-amber-200 mb-8">
              Comprehensive instruction for all ages and skill levels
            </p>
            <Link href="/" class="text-white/70 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>

          {/* Lesson Types */}
          <div class="grid lg:grid-cols-2 gap-8 mb-12">
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 class="text-3xl font-bold text-white mb-6">Instruments</h2>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="text-3xl">🎷</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Saxophone</h3>
                    <p class="text-white/70">Alto, tenor, soprano, and baritone</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="text-3xl">🎹</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Piano & Keyboards</h3>
                    <p class="text-white/70">Classical, jazz, and modern styles</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="text-3xl">🎼</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Woodwinds</h3>
                    <p class="text-white/70">Flute and clarinet</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 class="text-3xl font-bold text-white mb-6">Music Studies</h2>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="text-3xl">📚</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Music Theory</h3>
                    <p class="text-white/70">From basics to advanced concepts</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="text-3xl">🎨</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Improvisation</h3>
                    <p class="text-white/70">Jazz, blues, and contemporary styles</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="text-3xl">✍️</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Composition & Arranging</h3>
                    <p class="text-white/70">Write and arrange your own music</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Options */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <h2 class="text-3xl font-bold text-white mb-8 text-center">Lesson Options</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="text-center">
                <div class="text-4xl mb-4">🏠</div>
                <h3 class="text-2xl font-semibold text-white mb-4">In-Person Lessons</h3>
                <p class="text-white/80 mb-4">
                  Visit Jon's professional home studio in Seymour, CT for personalized, hands-on instruction.
                </p>
                <ul class="text-white/70 space-y-2">
                  <li>• Access to professional equipment</li>
                  <li>• Immediate feedback and guidance</li>
                  <li>• Performance opportunities</li>
                </ul>
              </div>
              <div class="text-center">
                <div class="text-4xl mb-4">💻</div>
                <h3 class="text-2xl font-semibold text-white mb-4">Online Lessons</h3>
                <p class="text-white/80 mb-4">
                  Connect from anywhere with high-quality video lessons via Skype and other platforms.
                </p>
                <ul class="text-white/70 space-y-2">
                  <li>• Flexible scheduling</li>
                  <li>• Learn from home</li>
                  <li>• Digital music resources</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div class="bg-gradient-to-r from-amber-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-amber-500/30">
            <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Your Musical Journey?</h2>
            <p class="text-white/90 mb-6 text-lg">
              Contact Jon today to schedule your first lesson and begin exploring your musical potential.
            </p>
            <div class="space-y-4">
              <p class="text-white/80">
                <strong>Email:</strong> <a href="mailto:jon@jonblanckmusic.com" class="text-amber-300 hover:text-amber-200 transition-colors">jon@jonblanckmusic.com</a>
              </p>
              <p class="text-white/80">
                <strong>Studio Location:</strong> Seymour, Connecticut
              </p>
              <a href="/contact" class="inline-block bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg mt-4">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Footer */}
          <div class="text-center py-8">
            <p class="text-white/60">Professional music instruction with over 20 years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Music Lessons - Jon Blanck Music",
  meta: [
    {
      name: "description",
      content: "Professional music lessons in saxophone, piano, woodwinds, and music theory with Jon Blanck. In-person and online instruction available.",
    },
  ],
};