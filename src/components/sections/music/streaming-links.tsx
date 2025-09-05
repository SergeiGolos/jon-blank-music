import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-gradient-to-r from-amber-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-amber-500/30">
      <h3 class="text-3xl font-bold text-white mb-6">Stream Jon's Music</h3>
      <p class="text-white/90 mb-8">
        Discover Jon's extensive discography across all major streaming platforms
      </p>
      <div class="grid md:grid-cols-4 gap-4">
        <a href="https://open.spotify.com/search/jon%20blanck"
           target="_blank"
           rel="noopener noreferrer"
           class="bg-transparent border-2 border-green-500 text-white hover:bg-green-500 hover:text-white px-6 py-4 rounded-lg transition-colors font-semibold">
          🎵 Spotify
        </a>
        <a href="https://music.apple.com/search?term=jon%20blanck"
           target="_blank"
           rel="noopener noreferrer"
           class="bg-transparent border-2 border-gray-500 text-white hover:bg-gray-500 hover:text-white px-6 py-4 rounded-lg transition-colors font-semibold">
          🍎 Apple Music
        </a>
        <a href="https://www.youtube.com/results?search_query=jon+blanck+music"
           target="_blank"
           rel="noopener noreferrer"
           class="bg-transparent border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-6 py-4 rounded-lg transition-colors font-semibold">
          📺 YouTube
        </a>
        <a href="https://www.amazon.com/s?k=jon+blanck+music"
           target="_blank"
           rel="noopener noreferrer"
           class="bg-transparent border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-white px-6 py-4 rounded-lg transition-colors font-semibold">
          🛒 Amazon Music
        </a>
      </div>
    </div>
  );
});
