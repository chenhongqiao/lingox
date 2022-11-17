import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/styles'], // vuetify ships precompiled css, no need to import sass
  vite: {
    // @ts-ignore
    // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
    ssr: {
      noExternal: ['vuetify'], // add the vuetify vite plugin
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify({ styles: { configFile: 'assets/vuetify.scss' } })
      ))
    },
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 900],
      Alice: [400, 500],
      'League Spartan': [700]
    }
  },
  i18n: {
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'english.json'
    },
    {
      code: 'zh',
      iso: 'zh-CN',
      file: 'chinese.json'
    }],
    langDir: 'i18n/',
    defaultLocale: 'en',
    /*detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    vueI18n: {
      fallbackLocale: {
        'zh-Hant': ['zh'],
        'zh-Hans': ['zh'],
        'zh-HK': ['zh'],
        'zh-TW': ['zh'],
        default: ['en']
      }
    }*/
  },
})
