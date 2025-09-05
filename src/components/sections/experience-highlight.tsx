import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mb-8 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
      <h3 class="mb-6 text-center text-2xl font-bold text-white">
        Professional Experience
      </h3>
      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h4 class="mb-3 text-lg font-semibold text-amber-300">
            Performance Credits
          </h4>
          <ul class="space-y-2 text-white/80">
            <li>• Peter Bernstein (Jazz Guitar Legend)</li>
            <li>• P-Funk Allstars (Funk Icons)</li>
            <li>• New Haven Symphony Orchestra</li>
            <li>• Ridgefield Symphony Orchestra</li>
            <li>• Elite wedding & event ensembles</li>
          </ul>
        </div>
        <div>
          <h4 class="mb-3 text-lg font-semibold text-amber-300">
            Teaching & Recording
          </h4>
          <ul class="space-y-2 text-white/80">
            <li>• Wilton Conservatory of Music</li>
            <li>• 40+ album recording credits</li>
            <li>• PBS network recordings</li>
            <li>• Private studio in Seymour, CT</li>
            <li>• Remote lessons available</li>
          </ul>
        </div>
      </div>
    </div>
  );
});
