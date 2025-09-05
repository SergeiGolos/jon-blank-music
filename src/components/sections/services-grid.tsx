import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mb-8 grid gap-8 lg:grid-cols-3">
      {/* Performance */}
      <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <div class="mb-4 text-center text-4xl">🎷</div>
        <h3 class="mb-4 text-center text-2xl font-bold text-white">
          Performance
        </h3>
        <ul class="mb-6 space-y-2 text-white/80">
          <li>• Jazz ensembles & big bands</li>
          <li>• Funk & R&B groups</li>
          <li>• Classical orchestras</li>
          <li>• Wedding & event bands</li>
          <li>• Session recording</li>
        </ul>
        <p class="text-center text-sm text-white/70">
          Available for performances, recording sessions, and collaborations
          across all genres.
        </p>
      </div>

      {/* Education */}
      <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <div class="mb-4 text-center text-4xl">🎓</div>
        <h3 class="mb-4 text-center text-2xl font-bold text-white">
          Music Education
        </h3>
        <ul class="mb-6 space-y-2 text-white/80">
          <li>• Saxophone & woodwinds</li>
          <li>• Piano & keyboards</li>
          <li>• Music theory & improvisation</li>
          <li>• Composition & arranging</li>
          <li>• Music production</li>
        </ul>
        <p class="text-center text-sm text-white/70">
          Comprehensive instruction for all ages and skill levels, in-person and
          online.
        </p>
      </div>

      {/* Recording */}
      <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <div class="mb-4 text-center text-4xl">🎵</div>
        <h3 class="mb-4 text-center text-2xl font-bold text-white">
          Recording & Composition
        </h3>
        <ul class="mb-6 space-y-2 text-white/80">
          <li>• Original compositions</li>
          <li>• Musical arrangements</li>
          <li>• Studio recordings</li>
          <li>• EPK development</li>
          <li>• 40+ album credits</li>
        </ul>
        <p class="text-center text-sm text-white/70">
          Professional recording, arranging, and composition services for
          artists and productions.
        </p>
      </div>
    </div>
  );
});
