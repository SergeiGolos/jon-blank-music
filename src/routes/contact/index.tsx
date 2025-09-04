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
              Contact Jon Blanck
            </h1>
            <p class="text-xl text-amber-200 mb-8">
              Get in touch for lessons, performances, or collaborations
            </p>
            <Link href={import.meta.env.BASE_URL} class="text-white/70 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 class="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="text-3xl">📧</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Email</h3>
                    <a href="mailto:jon@jonblanckmusic.com" class="text-amber-300 hover:text-amber-200 transition-colors">
                      jon@jonblanckmusic.com
                    </a>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="text-3xl">📍</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Studio Location</h3>
                    <p class="text-white/80">Seymour, Connecticut</p>
                    <p class="text-white/60 text-sm">In-person lessons available</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="text-3xl">💻</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Online Lessons</h3>
                    <p class="text-white/80">Available worldwide via Skype</p>
                    <p class="text-white/60 text-sm">Flexible scheduling</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="text-3xl">🎼</div>
                  <div>
                    <h3 class="text-xl font-semibold text-white">Services</h3>
                    <ul class="text-white/80 text-sm">
                      <li>• Private music lessons</li>
                      <li>• Performance bookings</li>
                      <li>• Recording sessions</li>
                      <li>• Composition & arranging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 class="text-3xl font-bold text-white mb-8">Send a Message</h2>
              
              <form class="space-y-6">
                <div>
                  <label for="name" class="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label for="email" class="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label for="subject" class="block text-white font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="" class="bg-slate-800">Select a subject</option>
                    <option value="lessons" class="bg-slate-800">Music Lessons</option>
                    <option value="performance" class="bg-slate-800">Performance Booking</option>
                    <option value="recording" class="bg-slate-800">Recording Session</option>
                    <option value="collaboration" class="bg-slate-800">Collaboration</option>
                    <option value="other" class="bg-slate-800">Other</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Tell me about your musical goals or project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>

              <div class="mt-6 text-center">
                <p class="text-white/70 text-sm">
                  I'll get back to you within 24 hours!
                </p>
              </div>
            </div>
          </div>

          {/* Professional Associations */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mt-12 border border-white/20">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">Professional Associations</h2>
            <div class="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 class="text-lg font-semibold text-amber-300 mb-3">Educational Partnerships</h3>
                <ul class="text-white/80 space-y-2">
                  <li>• Wilton Conservatory of Music</li>
                  <li>• Private studio in Seymour, CT</li>
                  <li>• Online instruction worldwide</li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-amber-300 mb-3">Professional Networks</h3>
                <ul class="text-white/80 space-y-2">
                  <li>• Verve Jazz Ensemble</li>
                  <li>• Connecticut Symphony Musicians</li>
                  <li>• Regional Jazz Communities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div class="text-center py-8">
            <p class="text-white/60">Professional musician serving students and clients worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact - Jon Blanck Music",
  meta: [
    {
      name: "description",
      content: "Contact Jon Blanck for music lessons, performance bookings, and recording sessions. Based in Seymour, CT with online lessons available worldwide.",
    },
  ],
};