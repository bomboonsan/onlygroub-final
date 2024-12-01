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
      partytown({
        // Adds dataLayer.push as a forwarding-event.
        config: {
          forward: ['dataLayer.push'],
        },
      }),
    ],
    redirects: {
      '/movie': {
        status: 301,
        destination: 'https://movie.onlygroub.com/'
      },
      '/category/thai/': {
        status: 301,
        destination: 'https://movie.onlygroub.com/category/thai/'
      },
      '/category/inter/': {
        status: 301,
        destination: 'https://movie.onlygroub.com/category/inter/'
      },
      '/four-hundred-and-four-suk-ni-run-run-run': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/four-hundred-and-four-suk-ni-run-run-run/'
      },
      '/wai-nhum-2544': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/wai-nhum-2544/'
      },
      '/red-one': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/red-one/'
      },
      '/police-modify': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/police-modify/'
      },
      '/endpresso': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/endpresso/'
      },
      '/woman-of-the-hour': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/woman-of-the-hour/'
      },
      '/the-paradise-of-thorns': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/the-paradise-of-thorns/'
      },
      '/tee-yod-2': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/tee-yod-2/'
      },
      '/the-4-danger': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/the-4-danger/'
      },
      '/the-substance': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/the-substance/'
      },
      '/luang-phee-teng-comeback': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/luang-phee-teng-comeback/'
      },
      '/uranus2324': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/uranus2324/'
      },
      '/present-still-perfect': {
        status: 301,
        destination: 'https://movie.onlygroub.com/movie/present-still-perfect/'
      },
    },
    output: 'static',
});