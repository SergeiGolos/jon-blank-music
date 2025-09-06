import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="hero" class="text-center py-10 md:py-20">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
        {/* Profile Image */}
        <div class="flex-shrink-0">
          <div class="relative">
            <div class="w-32 h-32 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-amber-500/30 bg-gradient-to-br from-amber-500/40 to-blue-600/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <img
                src="/jon-blanck-headshot.jpg"
                alt="Jon Blanck performing with saxophone on stage"
                width="256"
                height="256"
                class="w-full h-full object-cover"
                onError$={(e) => {
                  // Fallback to SVG placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20256%20256'%3e%3ccircle%20cx='128'%20cy='128'%20r='120'%20fill='%23f59e0b'/%3e%3ctext%20x='128'%20y='140'%20text-anchor='middle'%20fill='white'%20font-family='Arial'%20font-size='48'%20font-weight='bold'%3eJON%3c/text%3e%3ctext%20x='128'%20y='180'%20text-anchor='middle'%20fill='white'%20font-family='Arial'%20font-size='24'%3eBLANCK%3c/text%3e%3c/svg%3e";
                }}
              />

            </div>
          </div>
        </div>

        {/* Text Content */}
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
            Jon Blanck
          </h1>
          <p class="text-xl md:text-2xl text-amber-200 mb-3 md:mb-4 font-light">
            Saxophonist • Keyboardist • Composer • Educator
          </p>
          <p class="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            Chart-topping jazz artist, versatile multi-instrumentalist, and dedicated music educator
            bringing over two decades of professional experience across jazz, funk, classical, and contemporary music.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
        <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm md:text-base">
          Listen to Music
        </a>
        <a href="#lessons" class="bg-amber-500 hover:bg-amber-600 text-black px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm md:text-base">
          Book Lessons
        </a>
        
        <a href="#music" class="bg-white/10 hover:bg-white/20 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20 text-sm md:text-base">
          Contact Jon
        </a>
      </div>
    </section>
  );
});
