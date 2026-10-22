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
    fallbacks: ['serif'],
    cssVariable: '--font-rokkitt',
    styles: ['normal'],
    weights: ['400']
  },
  {
    provider: fontProviders.google(),
    name: 'Rozha One',
    cssVariable: '--font-rozha'
  }],

  integrations: [react(), favicons()],

});