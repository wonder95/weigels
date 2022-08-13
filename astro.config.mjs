import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), image()],
  output: 'server',
  adapter: netlify()
});