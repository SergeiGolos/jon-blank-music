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
          {/* Header */}
          <div class="text-center py-16">
            <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Listen & Watch
            </h1>
            <p class="text-xl text-amber-200 mb-8">
              Experience Jon's versatile musical artistry across multiple genres
            </p>
            <a href="/" class="text-white/70 hover:text-white transition-colors">
              ← Back to Home
            </a>
          </div>

          {/* Chart-Topping Albums */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <h2 class="text-3xl font-bold text-white mb-8 text-center">Chart-Topping Albums</h2>
            <p class="text-center text-white/90 mb-8">
              Verve Jazz Ensemble featuring Jon Blanck as Music Director, Composer & Arranger
            </p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-amber-500/30">
                <div class="text-4xl font-bold text-amber-300 mb-2">#1</div>
                <h4 class="text-white font-semibold mb-2">Connect The Dots</h4>
                <p class="text-white/70 text-sm mb-2">2018</p>
                <div class="space-y-2">
                  <a href="https://open.spotify.com/search/verve%20jazz%20ensemble%20connect%20the%20dots" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    🎵 Spotify
                  </a>
                  <a href="https://music.apple.com/search?term=verve%20jazz%20ensemble%20connect%20the%20dots" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm transition-colors">
                    🍎 Apple Music
                  </a>
                </div>
              </div>
              <div class="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-blue-500/30">
                <div class="text-4xl font-bold text-blue-300 mb-2">#5</div>
                <h4 class="text-white font-semibold mb-2">It's About Time</h4>
                <p class="text-white/70 text-sm mb-2">2013</p>
                <div class="space-y-2">
                  <a href="https://open.spotify.com/search/verve%20jazz%20ensemble%20it's%20about%20time" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    🎵 Spotify
                  </a>
                  <a href="https://music.apple.com/search?term=verve%20jazz%20ensemble%20it's%20about%20time" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm transition-colors">
                    🍎 Apple Music
                  </a>
                </div>
              </div>
              <div class="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-indigo-500/30">
                <div class="text-4xl font-bold text-indigo-300 mb-2">#6</div>
                <h4 class="text-white font-semibold mb-2">Night Mode</h4>
                <p class="text-white/70 text-sm mb-2">2019</p>
                <div class="space-y-2">
                  <a href="https://open.spotify.com/search/verve%20jazz%20ensemble%20night%20mode" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    🎵 Spotify
                  </a>
                  <a href="https://music.apple.com/search?term=verve%20jazz%20ensemble%20night%20mode" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm transition-colors">
                    🍎 Apple Music
                  </a>
                </div>
              </div>
              <div class="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 text-center backdrop-blur-sm border border-purple-500/30">
                <div class="text-4xl font-bold text-purple-300 mb-2">#8</div>
                <h4 class="text-white font-semibold mb-2">East End Sojourn</h4>
                <p class="text-white/70 text-sm mb-2">2016</p>
                <div class="space-y-2">
                  <a href="https://open.spotify.com/search/verve%20jazz%20ensemble%20east%20end%20sojourn" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                    🎵 Spotify
                  </a>
                  <a href="https://music.apple.com/search?term=verve%20jazz%20ensemble%20east%20end%20sojourn" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="block bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm transition-colors">
                    🍎 Apple Music
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Highlights */}
          <div class="grid lg:grid-cols-2 gap-8 mb-8">
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 class="text-3xl font-bold text-white mb-6">Video Performances</h2>
              <div class="space-y-6">
                <div class="bg-white/5 rounded-xl p-4">
                  <h3 class="text-lg font-semibold text-white mb-2">🎷 "Tennessee Whiskey" (Saxophone Cover)</h3>
                  <p class="text-white/70 mb-3">Solo tenor saxophone performance showcasing Jon's smooth tone and improvisational skills.</p>
                  <a href="https://www.youtube.com/results?search_query=jon+blanck+tennessee+whiskey+saxophone" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                    📺 Watch on YouTube
                  </a>
                </div>
                
                <div class="bg-white/5 rounded-xl p-4">
                  <h3 class="text-lg font-semibold text-white mb-2">🎵 "Love Never Felt So Good" (with Funkee Boy)</h3>
                  <p class="text-white/70 mb-3">Featured saxophone performance in smooth jazz/pop context.</p>
                  <a href="https://www.youtube.com/results?search_query=funkee+boy+love+never+felt+so+good+jon+blanck" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                    📺 Watch on YouTube
                  </a>
                </div>

                <div class="bg-white/5 rounded-xl p-4">
                  <h3 class="text-lg font-semibold text-white mb-2">🕺 "Flashlight" (with S.O.N.S. of Funk)</h3>
                  <p class="text-white/70 mb-3">High-energy funk performance showcasing Jon's groove and versatility.</p>
                  <a href="https://www.youtube.com/results?search_query=sons+of+funk+flashlight+jon+blanck" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                    📺 Watch on YouTube
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 class="text-3xl font-bold text-white mb-6">Ensemble Performances</h2>
              <div class="space-y-6">
                <div class="bg-white/5 rounded-xl p-4">
                  <h3 class="text-lg font-semibold text-white mb-2">🎺 Verve Jazz Ensemble</h3>
                  <p class="text-white/70 mb-3">Chart-topping jazz ensemble featuring Jon as Music Director and featured soloist.</p>
                  <a href="https://www.youtube.com/results?search_query=verve+jazz+ensemble" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                    📺 Watch on YouTube
                  </a>
                </div>
                
                <div class="bg-white/5 rounded-xl p-4">
                  <h3 class="text-lg font-semibold text-white mb-2">🎼 Moonlighters Big Band</h3>
                  <p class="text-white/70 mb-3">Traditional big band performances showcasing Jon's section and solo work.</p>
                  <a href="https://www.youtube.com/results?search_query=moonlighters+big+band+jon+blanck" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                    📺 Watch on YouTube
                  </a>
                </div>

                <div class="bg-white/5 rounded-xl p-4">
                  <h3 class="text-lg font-semibold text-white mb-2">🌴 Jon Garcia & C.L.A.V.E.</h3>
                  <p class="text-white/70 mb-3">Afro-Rican Jazz Quintet featuring Jon's Latin jazz expertise.</p>
                  <a href="https://www.youtube.com/results?search_query=jon+garcia+clave+afro+rican+jazz" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                    📺 Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Streaming Links */}
          <div class="bg-gradient-to-r from-amber-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-amber-500/30">
            <h2 class="text-3xl font-bold text-white mb-6">Stream Jon's Music</h2>
            <p class="text-white/90 mb-8">
              Discover Jon's extensive discography across all major streaming platforms
            </p>
            <div class="grid md:grid-cols-4 gap-4">
              <a href="https://open.spotify.com/search/jon%20blanck" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold">
                🎵 Spotify
              </a>
              <a href="https://music.apple.com/search?term=jon%20blanck" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-4 rounded-lg transition-colors font-semibold">
                🍎 Apple Music
              </a>
              <a href="https://www.youtube.com/results?search_query=jon+blanck+music" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold">
                📺 YouTube
              </a>
              <a href="https://www.amazon.com/s?k=jon+blanck+music" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold">
                🛒 Amazon Music
              </a>
            </div>
          </div>

          {/* Footer */}
          <div class="text-center py-8">
            <p class="text-white/60">Over 40 album credits spanning jazz, funk, classical, and contemporary music</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Listen & Watch - Jon Blanck Music",
  meta: [
    {
      name: "description",
      content: "Listen to Jon Blanck's chart-topping jazz albums and watch video performances. Stream music on Spotify, Apple Music, YouTube and more.",
    },
  ],
};