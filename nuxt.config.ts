// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/image"
  ],
  devtools: { enabled: true },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-us.json",
      },
      {
        code: "zh",
        file: "zh-cn.json",
      },
    ],
    defaultLocale: "zh",
    lazy: true,
    langDir: "locales/",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});