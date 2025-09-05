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
  );
});
