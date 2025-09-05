import { component$ } from "@builder.io/qwik";

interface VideoData {
  title: string;
  description: string;
  videoLink: string;
  group: "Video Performances" | "Ensemble Performances";
  image?: string;
}

interface VideoHighlightsProps {
  videos: VideoData[];
}

export default component$<VideoHighlightsProps>(({ videos }) => {
  const videoPerformances = videos.filter(
    (v) => v.group === "Video Performances",
  );
  const ensemblePerformances = videos.filter(
    (v) => v.group === "Ensemble Performances",
  );

  return (
    <div class="mb-8 grid gap-8 lg:grid-cols-2">
      <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <h3 class="mb-6 text-3xl font-bold text-white">Video Performances</h3>
        <div class="grid grid-cols-1 gap-4">
          {videoPerformances.map((video) => (
            <a
              key={video.title}
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              class="group relative block overflow-hidden rounded-xl bg-white/5 transition-colors hover:bg-white/10"
            >
              {video.image ? (
                <div class="relative aspect-video">
                  <img
                    src={video.image}
                    alt={video.title}
                    width={640}
                    height={360}
                    class="h-full w-full object-cover"
                  />
                  <div class="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/20">
                    <div class="rounded-full bg-red-600 p-4 transition-colors group-hover:bg-red-700">
                      <svg
                        class="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="relative flex aspect-video items-center justify-center bg-gradient-to-br from-red-600 to-red-800">
                  <div class="rounded-full bg-white/20 p-6 transition-colors group-hover:bg-white/30">
                    <svg
                      class="h-12 w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <div class="p-4">
                <h4 class="mb-2 text-lg font-semibold text-white">
                  {video.title}
                </h4>
                <p class="text-sm text-white/70">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <h3 class="mb-6 text-3xl font-bold text-white">
          Ensemble Performances
        </h3>
        <div class="grid grid-cols-1 gap-4">
          {ensemblePerformances.map((video) => (
            <a
              key={video.title}
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              class="group relative block overflow-hidden rounded-xl bg-white/5 transition-colors hover:bg-white/10"
            >
              {video.image ? (
                <div class="relative aspect-video">
                  <img
                    src={video.image}
                    alt={video.title}
                    width={640}
                    height={360}
                    class="h-full w-full object-cover"
                  />
                  <div class="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/20">
                    <div class="rounded-full bg-red-600 p-4 transition-colors group-hover:bg-red-700">
                      <svg
                        class="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="relative flex aspect-video items-center justify-center bg-gradient-to-br from-red-600 to-red-800">
                  <div class="rounded-full bg-white/20 p-6 transition-colors group-hover:bg-white/30">
                    <svg
                      class="h-12 w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <div class="p-4">
                <h4 class="mb-2 text-lg font-semibold text-white">
                  {video.title}
                </h4>
                <p class="text-sm text-white/70">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});
