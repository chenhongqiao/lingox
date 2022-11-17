import { createVuetify, ThemeDefinition } from 'vuetify'
import { mdi } from "vuetify/lib/iconsets/mdi";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const LingoX: ThemeDefinition = {
  dark: false,
  colors: {
    textbase: '#222222',
    background: '#ffffff',
    surface: '#f5f5f5',
    primary: '#e27262',
    secondary: '#363636',
    accent: '#32B0C0',
    error: '#e53935',
    info: '#2196F3',
    success: '#05c075',
    warning: '#ffd166'
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'LingoX',
      themes: {
        LingoX,
      }
    },
    icons: {
      defaultSet: 'mdi',
      sets: {
        mdi,
      }
    },
  })

  nuxtApp.vueApp.use(vuetify)
})