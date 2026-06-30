// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import config from './blog.config';
import { defineBlogConfig } from 'astro-blog-kit';
import { blogKit } from 'astro-blog-kit/integration';

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_paneldetecho/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
  integrations: [
    blogKit(defineBlogConfig(config)),
    sitemap()
  ]
});