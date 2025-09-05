import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/20 to-blue-500/20 p-8 text-center shadow-2xl backdrop-blur-lg">
      <h3 class="mb-6 text-3xl font-bold text-white">Stream Jon's Music</h3>
      <p class="mb-8 text-white/90">
        Discover Jon's extensive discography across all major streaming
        platforms
      </p>
      <div class="grid gap-4 md:grid-cols-4">
        <a
          href="https://open.spotify.com/search/jon%20blanck"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-green-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-green-700"
        >
          🎵 Spotify
        </a>
        <a
          href="https://music.apple.com/search?term=jon%20blanck"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-gray-800 px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-900"
        >
          🍎 Apple Music
        </a>
        <a
          href="https://www.youtube.com/results?search_query=jon+blanck+music"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-red-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-red-700"
        >
          📺 YouTube
        </a>
        <a
          href="https://www.amazon.com/s?k=jon+blanck+music"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-orange-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-orange-700"
        >
          🛒 Amazon Music
        </a>
      </div>
    </div>
  );
});
