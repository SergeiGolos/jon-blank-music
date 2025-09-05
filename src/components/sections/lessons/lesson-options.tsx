import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
      <h3 class="text-3xl font-bold text-white mb-8 text-center">Lesson Options</h3>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="text-center">
          <div class="text-4xl mb-4">🏠</div>
          <h4 class="text-2xl font-semibold text-white mb-4">In-Person Lessons</h4>
          <p class="text-white/80 mb-4">
            Visit Jon's professional home studio in Seymour, CT for personalized, hands-on instruction.
          </p>
          <ul class="text-white/70 space-y-2">
            <li>• Access to professional equipment</li>
            <li>• Immediate feedback and guidance</li>
            <li>• Performance opportunities</li>
          </ul>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-4">💻</div>
          <h4 class="text-2xl font-semibold text-white mb-4">Online Lessons</h4>
          <p class="text-white/80 mb-4">
            Connect from anywhere with high-quality video lessons via Skype and other platforms.
          </p>
          <ul class="text-white/70 space-y-2">
            <li>• Flexible scheduling</li>
            <li>• Learn from home</li>
            <li>• Digital music resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
});
