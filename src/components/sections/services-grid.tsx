import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
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
  );
});
