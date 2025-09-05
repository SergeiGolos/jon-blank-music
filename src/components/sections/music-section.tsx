import { component$ } from "@builder.io/qwik";
import VideoHighlights from "./music/video-highlights";
import StreamingLinks from "./music/streaming-links";
import { videosData } from "~/assets/data/videos";

export default component$(() => {

  return (
    <section id="music" class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Listen & Watch
        </h2>
        <p class="text-xl text-amber-200">
          Experience Jon's versatile musical artistry across multiple genres
        </p>
      </div>     

      <VideoHighlights videos={videosData} />

      <StreamingLinks />
    </section>
  );
});
