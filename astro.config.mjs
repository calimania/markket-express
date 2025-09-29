import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

const PUBLIC_URL = process.env.PUBLIC_URL || 'https://express.markket.place';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: PUBLIC_URL,
  base: '/'
});
