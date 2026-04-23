// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://landing.mequipo.com',
  base: '/landings/paneldetecho', // <--- Agrega esto
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()]
});