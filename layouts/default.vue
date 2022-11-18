<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">
          {{ $t(displayMenuTitle) }}
        </v-subheader>
        <div v-for="(item, index) in displayMenuRoutes" :key="index">
          <v-list-item v-if="item.link" :to="item.link">
            <v-list-item-content>
              <v-list-item-title class="py-1">
                {{ $t(item.text) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else @click="currentGroup=index">
            <v-list-item-content>
              <v-list-item-title class="py-1">
                {{ $t(item.text) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
      <template #prepend>
        <div v-if="currentGroup!==-1" class="px-2 pt-1">
          <v-btn outlined block class="mb-2" @click="currentGroup=-1">
            {{ $t('goBack') }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar flat max-height="80" height="80">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <nuxt-link to="/" class="d-flex align-center text-decoration-none mr-2">
          <div style="font-family: League Spartan; font-size: 2.4rem; !important">
            LingoX
          </div>
        </nuxt-link>

        <v-spacer />

        <div class="d-none d-md-block">
          <span
            v-for="(item, index) in routes"
            :key="index"
            class="mr-1"
          >
            <span>
              <v-menu offset-y open-on-hover>
                <template #activator="{ on, attrs }">
                  <v-btn
                    text
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ $t(item.text) }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(page, pindex) in item.routes"
                    :key="pindex"
                    :to="item.base+page.link"
                  >
                    {{ $t(page.text) }}
                  </v-list-item>
                </v-list>
              </v-menu>
            </span>
          </span>
        </div>

        <v-btn color="primary" outlined rounded href="https://www.paypal.com/donate/?hosted_button_id=XHAYQFP5C9PX4" target="_blank">
          Donate
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt class="mb-6" />
    </v-main>
    <v-footer class="secondary" dark>
      <v-container class="py-5">
        <v-row align="center">
          <v-col cols="12" sm="7" md="9">
            <div class="mb-2">
              <div class="text-uppercase text-h7 text-truncate">
                © 2022 LingoX
              </div>
            </div>
            <div class="text-body-1">
              <div>"{{ $t('makingLanguageAccessible') }}"</div>
            </div>
            <div class="mt-1 text-body-2">
              LingoX is a 501(c)(3) nonprofit organization.
            </div>
            <v-btn color="primary" class="mt-4" href="https://www.lingox.org/signup" target="_blank">
              Subscribe to Our Newsletter
            </v-btn>
          </v-col>
          <v-col cols="12" sm="5" md="3">
            <div>
              <v-responsive max-width="160px">
                <v-select
                  v-model="activeLocale"
                  prepend-icon="mdi-google-translate"
                  dark
                  dense
                  outlined
                  :items="locales"
                  item-text="displayName"
                  item-value="code"
                />
              </v-responsive>
            </div>
            <div class="text-center text-md-left mt-4 mt-lg-2">
              <v-btn
                fab
                small
                depressed
                color="secondary"
                target="_blank"
                href="https://www.instagram.com/lingoxofficial/"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                depressed
                color="secondary"
                target="_blank"
                class="ml-2"
                href="https://www.facebook.com/lingoxofficial"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                depressed
                color="secondary"
                target="_blank"
                href="https://www.paypal.com/donate/?hosted_button_id=XHAYQFP5C9PX4"
                class="ml-2"
              >
                <v-icon>mdi-hand-coin</v-icon>
              </v-btn>
            </div>
          </v-col>
          <!--v-col
            cols="12"
            md="6"
          >
            <div class="text-uppercase text-h7 text-truncate mb-2">
              Info
            </div>
            <div
              v-for="(item, i) in info"
              :key="i"
              class="mb-3 text-body-2"
            >
              <nuxt-link :to="item.link" class="text-decoration-none white--text">
                {{ item.text }}
              </nuxt-link>
            </div>
          </v-col-->
          <!--v-col
            cols="12"
            md="4"
          >
            <div class="text-uppercase text-h7 text-truncate mb-2">
              Action
            </div>
            <div
              v-for="(item, i) in actions"
              :key="i"
              class="mb-3 text-body-2"
            >
              <nuxt-link :to="item.link" class="text-decoration-none white--text">
                {{ item.text }}
              </nuxt-link>
            </div>
          </v-col!-->
        </v-row>
      </v-container>
    </v-footer>
    <v-snackbar
      v-model="banner"
    >
      Our free Chinese program is accepting new students!

      <template #action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="banner=false"
        >
          Close
        </v-btn>
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="$router.push('/programs/intro-chinese');banner=false"
        >
          Signup
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      locales: [
        {
          code: 'en',
          displayName: 'English'
        },
        {
          code: 'zh',
          displayName: '简体中文'
        }
      ],
      routes: [
        {
          text: 'aboutUs',
          base: '/about',
          routes: [
            { text: 'ourMission', link: '/mission' },
            { text: 'faqShort', link: '/faq' },
            { text: 'letterFromFounder', link: '/founder' }
          ]
        },
        {
          text: 'ourTeam',
          base: '/team',
          routes: [
            { text: 'executiveBoard', link: '/board' },
            { text: 'International Chapters', link: '/chapters' },
            { text: 'educationalConsultants', link: '/consultants' }
            //, { text: 'Featured Tutors', link: '/tutors' }
          ]
        },
        {
          text: 'programs',
          base: '/programs',
          routes: [
            { text: 'introChinese', link: '/intro-chinese' },
            { text: 'englishClassroom', link: '/english-classroom' },
            { text: 'speakerSeries', link: '/speaker-series' }
          ]
        },
        {
          text: 'getInvolved',
          base: '/involved',
          routes: [
            { text: 'startChapter', link: '/new-chapter' },
            { text: 'becomeCurriculumDeveloper', link: '/curriculum-developer' },
            { text: 'applyToBoard', link: '/apply-board' },
            { text: 'becomeEducationalConsultant', link: '/educational-consultant' }
          ]
        },
        {
          text: 'resources',
          base: '/resources',
          routes: [
            { text: 'mentalHealth', link: '/mental-health' }
          ]
        }
        /*,
      { text: 'Partners', link: '/partners' },
      { text: 'Press', link: '/press' },
      { text: 'Contact', link: '/contact' } */
      ],
      drawer: false,
      currentGroup: -1,
      banner: false,
      activeLocale: null
    }
  },
  fetch () {
    this.activeLocale = this.$i18n.locale
    if (!this.$route.path.startsWith('/programs/intro-chinese')) {
      this.banner = true
    }
  },
  computed: {
    displayMenuRoutes () {
      if (this.currentGroup !== -1) {
        // @ts-ignore
        return this.routes[this.currentGroup].routes.map((route) => { return { text: route.text, link: this.routes[this.currentGroup].base + route.link } })
      } else {
        return this.routes
      }
    },
    displayMenuTitle () {
      if (this.currentGroup !== -1) {
        // @ts-ignore
        return this.routes[this.currentGroup].text
      } else {
        return 'LingoX'
      }
    }
  },

  watch: {
    activeLocale (currentValue) {
      this.$i18n.setLocale(currentValue)
    }
  }
}
</script>
