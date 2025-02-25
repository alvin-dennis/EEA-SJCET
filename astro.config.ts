import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: "https://stargazers.club",
  integrations: [
    react(),
    sitemap(),
    robotsTxt({
      sitemap: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});