import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="hero" class="text-center py-20">
      <div class="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* Profile Image */}
        <div class="lg:w-1/3 flex justify-center">
          <div class="relative">
            <div class="w-80 h-80 rounded-full shadow-2xl border-4 border-amber-500/30 bg-gradient-to-br from-amber-500/40 to-blue-600/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <img
                src="https://github.com/user-attachments/assets/1cc85012-b7a7-4720-a460-1d4d3648eac6"
                alt="Jon Blanck performing with saxophone on stage"
                width="320"
                height="320"
                class="w-full h-full object-cover"
                onError$={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

            </div>
          </div>
        </div>

        {/* Text Content */}
        <div class="lg:w-2/3">
          <h1 class="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Jon Blanck
          </h1>
          <p class="text-2xl text-amber-200 mb-4 font-light">
            Saxophonist • Keyboardist • Composer • Educator
          </p>
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            Chart-topping jazz artist, versatile multi-instrumentalist, and dedicated music educator
            bringing over two decades of professional experience across jazz, funk, classical, and contemporary music.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
          Listen to Music
        </a>
        <a href="#lessons" class="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
          Book Lessons
        </a>
        
        <a href="#music" class="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20">
          Contact Jon
        </a>
      </div>
    </section>
  );
});
