import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
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
      <nav class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div class="max-w-6xl mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <a href="#hero" class="text-2xl font-bold text-white hover:text-amber-300 transition-colors">
              Jon Blanck
            </a>
            <div class="hidden md:flex space-x-8">
              <a href="#hero" class="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#lessons" class="text-white/80 hover:text-white transition-colors">Lessons</a>
              <a href="#music" class="text-white/80 hover:text-white transition-colors">Music</a>
              <a href="#contact" class="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div class="relative z-10 p-4 pt-20">
        <div class="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section id="hero" class="text-center py-20">
            <div class="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
              {/* Profile Image */}
              <div class="lg:w-1/3 flex justify-center">
                <div class="relative">
                  <div class="w-80 h-80 rounded-full shadow-2xl border-4 border-amber-500/30 bg-gradient-to-br from-amber-500/40 to-blue-600/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://github.com/user-attachments/assets/1cc85012-b7a7-4720-a460-1d4d3648eac6" 
                      alt="Jon Blanck performing with saxophone on stage"
                      width="320"
                      height="320"
                      class="w-full h-full object-cover"
                      onError$={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div class="fallback-icon absolute inset-0 items-center justify-center text-white/80 text-6xl" style="display: none;">
                      🎷
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div class="lg:w-2/3">
                <h1 class="text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  Jon Blanck
                </h1>
                <p class="text-2xl text-amber-200 mb-4 font-light">
                  Saxophonist • Keyboardist • Composer • Educator
                </p>
                <p class="text-xl text-white/90 mb-8 leading-relaxed">
                  Chart-topping jazz artist, versatile multi-instrumentalist, and dedicated music educator 
                  bringing over two decades of professional experience across jazz, funk, classical, and contemporary music.
                </p>
              </div>
            </div>
            
            <div class="flex flex-wrap justify-center gap-4">
              <a href="#lessons" class="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                Book Lessons
              </a>
              <a href="#music" class="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20">
                Listen to Music
              </a>
              <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                Contact Jon
              </a>
            </div>
          </section>

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

          {/* Music Section */}
          <section id="music" class="py-16">
            <div class="text-center mb-12">
              <h2 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Listen & Watch
              </h2>
              <p class="text-xl text-amber-200">
                Experience Jon's versatile musical artistry across multiple genres
              </p>
            </div>

            {/* Chart-Topping Albums */}
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
              <h3 class="text-3xl font-bold text-white mb-8 text-center">Chart-Topping Albums</h3>
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
                <h3 class="text-3xl font-bold text-white mb-6">Video Performances</h3>
                <div class="space-y-6">
                  <div class="bg-white/5 rounded-xl p-4">
                    <h4 class="text-lg font-semibold text-white mb-2">🎷 "Tennessee Whiskey" (Saxophone Cover)</h4>
                    <p class="text-white/70 mb-3">Solo tenor saxophone performance showcasing Jon's smooth tone and improvisational skills.</p>
                    <a href="https://www.youtube.com/results?search_query=jon+blanck+tennessee+whiskey+saxophone" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                      📺 Watch on YouTube
                    </a>
                  </div>
                  
                  <div class="bg-white/5 rounded-xl p-4">
                    <h4 class="text-lg font-semibold text-white mb-2">🎵 "Love Never Felt So Good" (with Funkee Boy)</h4>
                    <p class="text-white/70 mb-3">Featured saxophone performance in smooth jazz/pop context.</p>
                    <a href="https://www.youtube.com/results?search_query=funkee+boy+love+never+felt+so+good+jon+blanck" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                      📺 Watch on YouTube
                    </a>
                  </div>

                  <div class="bg-white/5 rounded-xl p-4">
                    <h4 class="text-lg font-semibold text-white mb-2">🕺 "Flashlight" (with S.O.N.S. of Funk)</h4>
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
                <h3 class="text-3xl font-bold text-white mb-6">Ensemble Performances</h3>
                <div class="space-y-6">
                  <div class="bg-white/5 rounded-xl p-4">
                    <h4 class="text-lg font-semibold text-white mb-2">🎺 Verve Jazz Ensemble</h4>
                    <p class="text-white/70 mb-3">Chart-topping jazz ensemble featuring Jon as Music Director and featured soloist.</p>
                    <a href="https://www.youtube.com/results?search_query=verve+jazz+ensemble" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                      📺 Watch on YouTube
                    </a>
                  </div>
                  
                  <div class="bg-white/5 rounded-xl p-4">
                    <h4 class="text-lg font-semibold text-white mb-2">🎼 Moonlighters Big Band</h4>
                    <p class="text-white/70 mb-3">Traditional big band performances showcasing Jon's section and solo work.</p>
                    <a href="https://www.youtube.com/results?search_query=moonlighters+big+band+jon+blanck" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
                      📺 Watch on YouTube
                    </a>
                  </div>

                  <div class="bg-white/5 rounded-xl p-4">
                    <h4 class="text-lg font-semibold text-white mb-2">🌴 Jon Garcia & C.L.A.V.E.</h4>
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
              <h3 class="text-3xl font-bold text-white mb-6">Stream Jon's Music</h3>
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
          </section>

          {/* Lessons Section */}
          <section id="lessons" class="py-16">
            <div class="text-center mb-12">
              <h2 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Music Lessons
              </h2>
              <p class="text-xl text-amber-200">
                Comprehensive instruction for all ages and skill levels
              </p>
            </div>

            {/* Lesson Types */}
            <div class="grid lg:grid-cols-2 gap-8 mb-12">
              <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <h3 class="text-3xl font-bold text-white mb-6">Instruments</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">🎷</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Saxophone</h4>
                      <p class="text-white/70">Alto, tenor, soprano, and baritone</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">🎹</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Piano & Keyboards</h4>
                      <p class="text-white/70">Classical, jazz, and modern styles</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">🎼</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Woodwinds</h4>
                      <p class="text-white/70">Flute and clarinet</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <h3 class="text-3xl font-bold text-white mb-6">Music Studies</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">📚</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Music Theory</h4>
                      <p class="text-white/70">From basics to advanced concepts</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">🎨</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Improvisation</h4>
                      <p class="text-white/70">Jazz, blues, and contemporary styles</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">✍️</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Composition & Arranging</h4>
                      <p class="text-white/70">Write and arrange your own music</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Options */}
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
              <h3 class="text-3xl font-bold text-white mb-8 text-center">Lesson Options</h3>
              <div class="grid md:grid-cols-2 gap-8">
                <div class="text-center">
                  <div class="text-4xl mb-4">🏠</div>
                  <h4 class="text-2xl font-semibold text-white mb-4">In-Person Lessons</h4>
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
                  <h4 class="text-2xl font-semibold text-white mb-4">Online Lessons</h4>
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
          </section>

          {/* Contact Section */}
          <section id="contact" class="py-16">
            <div class="text-center mb-12">
              <h2 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Contact Jon
              </h2>
              <p class="text-xl text-amber-200">
                Get in touch for lessons, performances, or collaborations
              </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 mb-8">
              {/* Contact Information */}
              <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <h3 class="text-3xl font-bold text-white mb-8">Get in Touch</h3>
                
                <div class="space-y-6">
                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">📧</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Email</h4>
                      <a href="mailto:jon@jonblanckmusic.com" class="text-amber-300 hover:text-amber-200 transition-colors">
                        jon@jonblanckmusic.com
                      </a>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">📍</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Studio Location</h4>
                      <p class="text-white/80">Seymour, Connecticut</p>
                      <p class="text-white/60 text-sm">In-person lessons available</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">💻</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Online Lessons</h4>
                      <p class="text-white/80">Available worldwide via Skype</p>
                      <p class="text-white/60 text-sm">Flexible scheduling</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="text-3xl">🎼</div>
                    <div>
                      <h4 class="text-xl font-semibold text-white">Services</h4>
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
                <h3 class="text-3xl font-bold text-white mb-8">Send a Message</h3>
                
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
            <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h3 class="text-2xl font-bold text-white mb-6 text-center">Professional Associations</h3>
              <div class="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <h4 class="text-lg font-semibold text-amber-300 mb-3">Educational Partnerships</h4>
                  <ul class="text-white/80 space-y-2">
                    <li>• Wilton Conservatory of Music</li>
                    <li>• Private studio in Seymour, CT</li>
                    <li>• Online instruction worldwide</li>
                  </ul>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-amber-300 mb-3">Professional Networks</h4>
                  <ul class="text-white/80 space-y-2">
                    <li>• Verve Jazz Ensemble</li>
                    <li>• Connecticut Symphony Musicians</li>
                    <li>• Regional Jazz Communities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

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
