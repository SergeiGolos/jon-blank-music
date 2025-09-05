import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mb-8 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
      <h2 class="mb-6 text-center text-3xl font-bold text-white">
        Chart-Topping Success
      </h2>
      <p class="mb-8 text-center text-white/90">
        Music Director, Composer & Arranger for the Verve Jazz Ensemble
      </p>

      <div class="grid gap-6 md:grid-cols-4">
        <div class="rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-600/20 p-6 text-center backdrop-blur-sm">
          <div class="mb-2 text-4xl font-bold text-amber-300">#1</div>
          <h4 class="mb-2 font-semibold text-white">Connect The Dots</h4>
          <p class="text-sm text-white/70">USA Jazz Radio Charts</p>
          <p class="text-xs text-white/60">2018</p>
        </div>
        <div class="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 text-center backdrop-blur-sm">
          <div class="mb-2 text-4xl font-bold text-blue-300">#5</div>
          <h4 class="mb-2 font-semibold text-white">It's About Time</h4>
          <p class="text-sm text-white/70">USA Jazz Radio Charts</p>
          <p class="text-xs text-white/60">2013</p>
        </div>
        <div class="rounded-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-6 text-center backdrop-blur-sm">
          <div class="mb-2 text-4xl font-bold text-indigo-300">#6</div>
          <h4 class="mb-2 font-semibold text-white">Night Mode</h4>
          <p class="text-sm text-white/70">USA Jazz Radio Charts</p>
          <p class="text-xs text-white/60">2019</p>
        </div>
        <div class="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 text-center backdrop-blur-sm">
          <div class="mb-2 text-4xl font-bold text-purple-300">#8</div>
          <h4 class="mb-2 font-semibold text-white">East End Sojourn</h4>
          <p class="text-sm text-white/70">USA Jazz Radio Charts</p>
          <p class="text-xs text-white/60">2016</p>
        </div>
      </div>
    </div>
  );
});
