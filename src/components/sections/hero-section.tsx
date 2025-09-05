import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="hero" class="py-20 text-center">
      <div class="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row">
        {/* Profile Image */}
        <div class="flex justify-center lg:w-1/3">
          <div class="relative">
            <div class="flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-4 border-amber-500/30 bg-gradient-to-br from-amber-500/40 to-blue-600/40 shadow-2xl backdrop-blur-sm">
              <img
                src="https://github.com/user-attachments/assets/1cc85012-b7a7-4720-a460-1d4d3648eac6"
                alt="Jon Blanck performing with saxophone on stage"
                width="320"
                height="320"
                class="h-full w-full object-cover"
                onError$={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div class="lg:w-2/3">
          <h1 class="mb-6 text-6xl font-bold text-white drop-shadow-lg">
            Jon Blanck
          </h1>
          <p class="mb-4 text-2xl font-light text-amber-200">
            Saxophonist • Keyboardist • Composer • Educator
          </p>
          <p class="mb-8 text-xl leading-relaxed text-white/90">
            Chart-topping jazz artist, versatile multi-instrumentalist, and
            dedicated music educator bringing over two decades of professional
            experience across jazz, funk, classical, and contemporary music.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          class="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
        >
          Listen to Music
        </a>
        <a
          href="#lessons"
          class="rounded-lg bg-amber-500 px-8 py-3 font-semibold text-black shadow-lg transition-colors hover:bg-amber-600"
        >
          Book Lessons
        </a>

        <a
          href="#music"
          class="rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          Contact Jon
        </a>
      </div>
    </section>
  );
});
