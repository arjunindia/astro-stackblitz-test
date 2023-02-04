import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from '@astrojs/preact';

// https://astro.build/config
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://steady-puffpuff-e28869.netlify.app/',
  integrations: [preact(), prefetch(), sitemap()],
});
