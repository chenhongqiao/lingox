import { defineNuxtConfig } from '@nuxt/bridge'
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  bridge: {
    nitro: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - LingoX',
    title: 'LingoX',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/theme.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/filters/capitalize.js' },
    { src: '~/filters/lowercase.js' },
    { src: '~/filters/uppercase.js' },
    { src: '~/filters/trim.js' },
    { src: '~/filters/placeholder.js' },
    { src: '~/filters/formatDate.js' },
    { src: '~/filters/ordinal.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/scss/vuetify/variables/_index.scss'],
      optionsPath: '~/configs/vuetify.js',
      treeShake: true
    }],
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [100, 200, 300, 400, 500, 600, 700, 900],
        Alice: [400, 500]
      }
    }],
    'nuxt-compress',
    ['@nuxtjs/i18n', {
      locales: [{
        code: 'en',
        iso: 'en-US',
        file: 'english.custom.yaml'
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'chinese.custom.yaml'
      }],
      langDir: 'locales/',
      fallbackLocale: 'en',
      vueI18nLoader: true,
      strategy: 'no_prefix',
      detectBrowserLanguage: {
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
      }
    }],
    ['@nuxt/image', {
      dir: 'static/images'
    }],
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.(custom.yaml)$/,
        use: 'yaml-loader'
      })
    }
  }
})
