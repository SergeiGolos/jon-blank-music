import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
      <h3 class="mb-8 text-3xl font-bold text-white">Get in Touch</h3>

      <div class="space-y-6">
        <div class="flex items-center space-x-4">
          <div class="text-3xl">📧</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Email</h4>
            <a
              href="mailto:jon@jonblanckmusic.com"
              class="text-amber-300 transition-colors hover:text-amber-200"
            >
              jon@jonblanckmusic.com
            </a>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="text-3xl">📍</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Studio Location</h4>
            <p class="text-white/80">Seymour, Connecticut</p>
            <p class="text-sm text-white/60">In-person lessons available</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="text-3xl">💻</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Online Lessons</h4>
            <p class="text-white/80">Available worldwide via Skype</p>
            <p class="text-sm text-white/60">Flexible scheduling</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="text-3xl">🎼</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Services</h4>
            <ul class="text-sm text-white/80">
              <li>• Private music lessons</li>
              <li>• Performance bookings</li>
              <li>• Recording sessions</li>
              <li>• Composition & arranging</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
