// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://onlygroub.com',
    integrations: [
      sitemap({
        changefreq: 'daily',
        priority: 0.8,      
        lastmod: new Date(),
        entryLimit: 50000, // จำนวน URLs สูงสุดต่อ sitemap
      }), 
      tailwind(), 
      react(), 
      partytown()
    ],
    output: 'static',
});