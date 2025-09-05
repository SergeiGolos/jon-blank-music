import { component$ } from "@builder.io/qwik";

interface ChartData {
  title: string;
  year: number;
  chartNumber: number;
  links: { platform: string; url: string }[];
}

const chartData: ChartData[] = [
  {
    title: "Connect The Dots",
    year: 2018,
    chartNumber: 1,
    links: [
      {
        platform: "Spotify",
        url: "https://open.spotify.com/search/verve%20jazz%20ensemble%20connect%20the%20dots",
      },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/search?term=verve%20jazz%20ensemble%20connect%20the%20dots",
      },
    ],
  },
  {
    title: "It's About Time",
    year: 2013,
    chartNumber: 5,
    links: [
      {
        platform: "Spotify",
        url: "https://open.spotify.com/search/verve%20jazz%20ensemble%20it's%20about%20time",
      },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/search?term=verve%20jazz%20ensemble%20it's%20about%20time",
      },
    ],
  },
  {
    title: "Night Mode",
    year: 2019,
    chartNumber: 6,
    links: [
      {
        platform: "Spotify",
        url: "https://open.spotify.com/search/verve%20jazz%20ensemble%20night%20mode",
      },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/search?term=verve%20jazz%20ensemble%20night%20mode",
      },
    ],
  },
  {
    title: "East End Sojourn",
    year: 2016,
    chartNumber: 8,
    links: [
      {
        platform: "Spotify",
        url: "https://open.spotify.com/search/verve%20jazz%20ensemble%20east%20end%20sojourn",
      },
      {
        platform: "Apple Music",
        url: "https://music.apple.com/search?term=verve%20jazz%20ensemble%20east%20end%20sojourn",
      },
    ],
  },
];

export default component$(() => {
  return (
    <div class="mb-8 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
      <h3 class="mb-8 text-center text-3xl font-bold text-white">
        Chart-Topping Albums
      </h3>
      <p class="mb-8 text-center text-white/90">
        Verve Jazz Ensemble featuring Jon Blanck as Music Director, Composer &
        Arranger
      </p>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {chartData.map((chart: ChartData, index: number) => (
          <div
            key={chart.title}
            class={`rounded-xl border bg-gradient-to-br p-6 text-center backdrop-blur-sm ${
              index === 0
                ? "border-amber-500/30 from-amber-500/20 to-amber-600/20"
                : index === 1
                  ? "border-blue-500/30 from-blue-500/20 to-blue-600/20"
                  : index === 2
                    ? "border-indigo-500/30 from-indigo-500/20 to-indigo-600/20"
                    : "border-purple-500/30 from-purple-500/20 to-purple-600/20"
            }`}
          >
            <div
              class={`mb-2 text-4xl font-bold ${
                index === 0
                  ? "text-amber-300"
                  : index === 1
                    ? "text-blue-300"
                    : index === 2
                      ? "text-indigo-300"
                      : "text-purple-300"
              }`}
            >
              #{chart.chartNumber}
            </div>
            <h4 class="mb-2 font-semibold text-white">{chart.title}</h4>
            <p class="mb-2 text-sm text-white/70">{chart.year}</p>
            <div class="space-y-2">
              {chart.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={`block rounded px-4 py-2 text-sm transition-colors ${
                    link.platform === "Spotify"
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-800 text-white hover:bg-gray-900"
                  }`}
                >
                  🎵 {link.platform}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
