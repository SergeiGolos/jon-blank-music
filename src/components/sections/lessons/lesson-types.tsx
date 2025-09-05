import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
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
  );
});
