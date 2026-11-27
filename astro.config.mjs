// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { createSlotValueFromString } from 'astro/runtime/server/render/slot.js';
// https://astro.build/config

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false
  }
});