// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Karla",
        cssVariable: "--font-karla",
        weights: [200, 400, 700],
        styles: ["normal"],
      },
    ],
  },
});
