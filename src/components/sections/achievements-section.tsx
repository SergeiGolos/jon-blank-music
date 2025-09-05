import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
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
  );
});
