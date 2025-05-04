import { defineNuxtConfig } from "nuxt/config";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  build: {
    transpile: ["vuetify"],
  },
  srcDir: "src/",
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  },
  nitro: {
    preset: 'netlify_edge'
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
