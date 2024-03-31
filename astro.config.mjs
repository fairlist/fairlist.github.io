import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.PROD ? 'https://fairlist.github.io' : 'http://localhost:4321',
	integrations: [sitemap()],
});
