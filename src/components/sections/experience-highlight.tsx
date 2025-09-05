import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
      <h3 class="text-2xl font-bold text-white mb-6 text-center">Professional Experience</h3>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h4 class="text-lg font-semibold text-amber-300 mb-3">Performance Credits</h4>
          <ul class="text-white/80 space-y-2">
            <li>• Peter Bernstein (Jazz Guitar Legend)</li>
            <li>• P-Funk Allstars (Funk Icons)</li>
            <li>• New Haven Symphony Orchestra</li>
            <li>• Ridgefield Symphony Orchestra</li>
            <li>• Elite wedding & event ensembles</li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold text-amber-300 mb-3">Teaching & Recording</h4>
          <ul class="text-white/80 space-y-2">
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
