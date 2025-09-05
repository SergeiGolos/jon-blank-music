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
  const videoPerformances = videos.filter(v => v.group === "Video Performances");
  const ensemblePerformances = videos.filter(v => v.group === "Ensemble Performances");

  return (
    <div class="grid lg:grid-cols-2 gap-8 mb-8">
      <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h3 class="text-3xl font-bold text-white mb-6">Video Performances</h3>
        <div class="grid grid-cols-1 gap-4">
          {videoPerformances.map((video) => (
            <a
              key={video.title}
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              class="group relative block bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              {video.image ? (
                <div class="relative aspect-video">
                  <img
                    src={video.image}
                    alt={video.title}
                    width={640}
                    height={360}
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div class="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="relative aspect-video bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <div class="bg-white/20 rounded-full p-6 group-hover:bg-white/30 transition-colors">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
              <div class="p-4">
                <h4 class="text-lg font-semibold text-white mb-2">{video.title}</h4>
                <p class="text-white/70 text-sm">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h3 class="text-3xl font-bold text-white mb-6">Ensemble Performances</h3>
        <div class="grid grid-cols-1 gap-4">
          {ensemblePerformances.map((video) => (
            <a
              key={video.title}
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              class="group relative block bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              {video.image ? (
                <div class="relative aspect-video">
                  <img
                    src={video.image}
                    alt={video.title}
                    width={640}
                    height={360}
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div class="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="relative aspect-video bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <div class="bg-white/20 rounded-full p-6 group-hover:bg-white/30 transition-colors">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
              <div class="p-4">
                <h4 class="text-lg font-semibold text-white mb-2">{video.title}</h4>
                <p class="text-white/70 text-sm">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});
