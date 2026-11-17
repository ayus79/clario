import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://ayus79.github.io/clario/
// If you later add a custom domain, set site to it and base to '/'.
export default defineConfig({
  output: 'static',
  site: 'https://ayus79.github.io',
  base: '/clario',
  compressHTML: true,
});
