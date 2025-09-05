import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mb-8 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
      <h3 class="mb-8 text-center text-3xl font-bold text-white">
        Lesson Options
      </h3>
      <div class="grid gap-8 md:grid-cols-2">
        <div class="text-center">
          <div class="mb-4 text-4xl">🏠</div>
          <h4 class="mb-4 text-2xl font-semibold text-white">
            In-Person Lessons
          </h4>
          <p class="mb-4 text-white/80">
            Visit Jon's professional home studio in Seymour, CT for
            personalized, hands-on instruction.
          </p>
          <ul class="space-y-2 text-white/70">
            <li>• Access to professional equipment</li>
            <li>• Immediate feedback and guidance</li>
            <li>• Performance opportunities</li>
          </ul>
        </div>
        <div class="text-center">
          <div class="mb-4 text-4xl">💻</div>
          <h4 class="mb-4 text-2xl font-semibold text-white">Online Lessons</h4>
          <p class="mb-4 text-white/80">
            Connect from anywhere with high-quality video lessons via Skype and
            other platforms.
          </p>
          <ul class="space-y-2 text-white/70">
            <li>• Flexible scheduling</li>
            <li>• Learn from home</li>
            <li>• Digital music resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
});
