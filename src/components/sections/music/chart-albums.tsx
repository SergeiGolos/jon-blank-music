import { component$ } from "@builder.io/qwik";
import { ChartData, chartData } from "~/assets/data/chart";

export default component$(() => {

  return (
    <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
      <h3 class="text-3xl font-bold text-white mb-8 text-center">Chart-Topping Albums</h3>
      <p class="text-center text-white/90 mb-8">
        Verve Jazz Ensemble featuring Jon Blanck as Music Director, Composer & Arranger
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chartData.map((chart: ChartData, index: number) => (
          <div
            key={chart.title}
            class={`bg-gradient-to-br rounded-xl p-6 text-center backdrop-blur-sm border ${
              index === 0 ? 'from-amber-500/20 to-amber-600/20 border-amber-500/30' :
              index === 1 ? 'from-blue-500/20 to-blue-600/20 border-blue-500/30' :
              index === 2 ? 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30' :
              'from-purple-500/20 to-purple-600/20 border-purple-500/30'
            }`}
          >
            <div class={`text-4xl font-bold mb-2 ${
              index === 0 ? 'text-amber-300' :
              index === 1 ? 'text-blue-300' :
              index === 2 ? 'text-indigo-300' :
              'text-purple-300'
            }`}>#{chart.chartNumber}</div>
            <h4 class="text-white font-semibold mb-2">{chart.title}</h4>
            <p class="text-white/70 text-sm mb-2">{chart.year}</p>
            <div class="space-y-2">
              {chart.links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={`block px-4 py-2 rounded text-sm transition-colors ${
                    link.platform === 'Spotify' ? 'bg-green-600 hover:bg-green-700 text-white' :
                    'bg-gray-800 hover:bg-gray-900 text-white'
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
