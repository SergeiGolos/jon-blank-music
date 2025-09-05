import { component$ } from "@builder.io/qwik";
import ContactInfo from "./contact/contact-info";
import ContactForm from "./contact/contact-form";

export default component$(() => {
  return (
    <section id="contact" class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Contact Jon
        </h2>
        <p class="text-xl text-amber-200">
          Get in touch for lessons, performances, or collaborations
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-8">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Professional Associations */}
      <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h3 class="text-2xl font-bold text-white mb-6 text-center">Professional Associations</h3>
        <div class="grid md:grid-cols-2 gap-8 text-center">
          <div>
            <h4 class="text-lg font-semibold text-amber-300 mb-3">Educational Partnerships</h4>
            <ul class="text-white/80 space-y-2">
              <li>• Wilton Conservatory of Music</li>
              <li>• Private studio instruction</li>
              <li>• Online music education</li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-amber-300 mb-3">Professional Networks</h4>
            <ul class="text-white/80 space-y-2">
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
