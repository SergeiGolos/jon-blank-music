import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div class="absolute top-1/4 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-600 rounded-full opacity-25 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-10 w-12 h-12 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div class="max-w-2xl w-full">
          {/* Main content */}
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/20">
            <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              🚀 Future Project
            </h1>
            <p class="text-xl text-white/90 mb-6 leading-relaxed">
              We're crafting something extraordinary that will revolutionize the way you experience the web.
              Get ready for innovation, magic, and endless possibilities.
            </p>

            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div class="text-3xl mb-2">⚡</div>
                <h3 class="text-white font-semibold mb-1">Lightning Fast</h3>
                <p class="text-white/70 text-sm">Blazing speed with cutting-edge technology</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div class="text-3xl mb-2">🎨</div>
                <h3 class="text-white font-semibold mb-1">Beautiful Design</h3>
                <p class="text-white/70 text-sm">Stunning visuals that captivate and inspire</p>
              </div>
              <div class="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div class="text-3xl mb-2">🦄</div>
                <h3 class="text-white font-semibold mb-1">Magical Experience</h3>
                <p class="text-white/70 text-sm">Unicorn-level awesomeness awaits</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-center space-x-2 text-white/80">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-lg">Building the future...</span>
              </div>

              <div class="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p class="text-white/80 mb-2">Launch Date:</p>
                <p class="text-2xl font-bold text-white">Coming Soon™</p>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-white/20">
              <p class="text-white/60">© 2025 Future Project. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Sticker - Star Repo */}
      <a
        href="https://github.com/SergeiGolos/copilot-do-qwik"
        target="_blank"
        rel="noopener noreferrer"
        class="fixed top-4 right-4 bg-yellow-400 text-black px-3 py-2 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 z-20 font-semibold text-sm"
      >
        ⭐ Star Repo
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Future Project - Under Construction",
  meta: [
    {
      name: "description",
      content: "An extraordinary future project is under construction. Get ready for something magical!",
    },
  ],
};
