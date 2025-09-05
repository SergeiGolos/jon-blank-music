import { component$ } from "@builder.io/qwik";
import ContactInfo from "./contact/contact-info";
import ContactForm from "./contact/contact-form";

export default component$(() => {
  return (
    <section id="contact" class="py-16">
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-5xl font-bold text-white drop-shadow-lg">
          Contact Jon
        </h2>
        <p class="text-xl text-amber-200">
          Get in touch for lessons, performances, or collaborations
        </p>
      </div>

      <div class="mb-8 grid gap-12 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Professional Associations */}
      <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <h3 class="mb-6 text-center text-2xl font-bold text-white">
          Professional Associations
        </h3>
        <div class="grid gap-8 text-center md:grid-cols-2">
          <div>
            <h4 class="mb-3 text-lg font-semibold text-amber-300">
              Educational Partnerships
            </h4>
            <ul class="space-y-2 text-white/80">
              <li>• Wilton Conservatory of Music</li>
              <li>• Private studio instruction</li>
              <li>• Online music education</li>
            </ul>
          </div>
          <div>
            <h4 class="mb-3 text-lg font-semibold text-amber-300">
              Professional Networks
            </h4>
            <ul class="space-y-2 text-white/80">
              <li>• Verve Jazz Ensemble</li>
              <li>• Local music community</li>
              <li>• Recording industry contacts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});
