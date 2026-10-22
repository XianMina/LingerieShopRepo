// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [{
    provider: fontProviders.google(),
    name: 'Rosarivo',
    cssVariable: '--font-rosarivo',
  },
  {
    provider: fontProviders.google(),
    name: 'Rokkitt',
    cssVariable: '--font-rokkitt'
  },
  {
    provider: fontProviders.google(),
    name: 'Rozha One',
    cssVariable: '--font-rozha'
  },
  {
    provider: fontProviders.google(),
    name: 'Roboto',
    cssVariable: '--roboto'
  }],

  integrations: [react(), favicons()],

});