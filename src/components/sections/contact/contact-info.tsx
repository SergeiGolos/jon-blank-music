import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
      <h3 class="text-3xl font-bold text-white mb-8">Get in Touch</h3>

      <div class="space-y-6">
        <div class="flex items-center space-x-4">
          <div class="text-3xl">📧</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Email</h4>
            <a href="mailto:jon@jonblanckmusic.com" class="text-amber-300 hover:text-amber-200 transition-colors">
              jon@jonblanckmusic.com
            </a>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="text-3xl">📍</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Studio Location</h4>
            <p class="text-white/80">Seymour, Connecticut</p>
            <p class="text-white/60 text-sm">In-person lessons available</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="text-3xl">💻</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Online Lessons</h4>
            <p class="text-white/80">Available worldwide via Skype</p>
            <p class="text-white/60 text-sm">Flexible scheduling</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="text-3xl">🎼</div>
          <div>
            <h4 class="text-xl font-semibold text-white">Services</h4>
            <ul class="text-white/80 text-sm">
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
