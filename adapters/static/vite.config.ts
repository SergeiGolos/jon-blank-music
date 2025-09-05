import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    base: "/",
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.ssr.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdapter({
        origin: "https://sergeigolos.github.io/jon-blank-music/",
      }),
    ],
  };
});
