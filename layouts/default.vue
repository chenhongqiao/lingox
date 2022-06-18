<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold">
          {{ displayMenuTitle }}
        </v-subheader>
        <div v-for="(item, index) in displayRoutes" :key="index">
          <v-list-item v-if="item.link" :to="item.link">
            <v-list-item-content :to="item.link">
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else-if="item.routes" @click="currentGroup=index">
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
      <template #prepend>
        <div v-if="currentGroup!==-1" class="px-2 pt-1">
          <v-btn outlined block class="mb-2" @click="currentGroup=-1">
            Go Back
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar height="80" flat>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      <v-container class="py-0 px-0 px-sm-2 fill-height">
        <nuxt-link to="/" class="d-flex align-center text-decoration-none mr-2">
          <h1 class="text-h4">
            LingoX
          </h1>
        </nuxt-link>

        <v-spacer />

        <div class="d-none d-md-block">
          <span
            v-for="(item, index) in routes"
            :key="index"
          >
            <span v-if="item.link">
              <v-btn :to="item.link" text>
                {{ item.text }}
              </v-btn>
            </span>
            <span v-else-if="item.routes">
              <v-menu offset-y>
                <template #activator="{ on, attrs }">
                  <v-btn
                    text
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ item.text }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(page, pindex) in item.routes"
                    :key="pindex"
                    :to="item.base+page.link"
                  >
                    {{ page.text }}
                  </v-list-item>
                </v-list>
              </v-menu>
            </span>
          </span>
        </div>

        <!--v-btn color="primary" large outlined rounded>
          Donate
        </v-btn-->
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer class="secondary" dark>
      <v-container class="py-5">
        <v-row>
          <v-col cols="12" md="6">
            <div class="mb-2">
              <div class="text-uppercase text-h7 text-truncate">
                © 2022 LingoX
              </div>
            </div>
            <div class="text-body-1">
              <div>“Making Language Education Accessible for All”</div>
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
  </v-app>
</template>

<script lang="ts">
import { defineComponent, computed, ref, Ref } from '@nuxtjs/composition-api'
interface Route {
  text: string
  link: string
}
interface Group {
  text: string
  base: string
  routes: Route[]
}
export default defineComponent({
  name: 'DefaultLayout',
  setup () {
    const routes: Ref<Array<Group | Route>> = ref([
      {
        text: 'About Us',
        base: '/about',
        routes: [
          { text: 'Mission', link: '/mission' },
          { text: 'FAQs', link: '/faq' }
        ]
      },
      {
        text: 'Our Team',
        base: '/team',
        routes: [
          { text: 'Executive Board', link: '/board' },
          { text: 'International Chapters', link: '/chapters' },
          { text: 'Educational Consultants', link: '/consultants' },
          { text: 'Featured Tutors', link: '/tutors' }
        ]
      }
      /* ,{
        text: 'Get Involved',
        base: '/involved',
        routes: [
          { text: 'Enroll a Student', link: '/enroll' },
          { text: 'Become a Tutor', link: '/tutor' },
          { text: 'Join Our Team', link: '/join' }
        ]
      },
      { text: 'Partners', link: '/partners' },
      { text: 'Press', link: '/press' },
      { text: 'Contact', link: '/contact' } */
    ])

    const info: Ref<Route[]> = ref([{
      text: 'Mission',
      link: '/about/mission'
    }])

    const actions: Ref<Route[]> = ref([
      { text: 'Enroll a Student', link: '/involved/enroll' },
      { text: 'Become a Tutor', link: '/involved/tutor' },
      { text: 'Join the LingoX Team', link: '/involved/join' },
      { text: 'Contact', link: '/contact' },
      { text: 'Donate', link: '/donate' }
    ])

    const drawer = ref(false)

    const currentGroup = ref(-1)

    const displayMenuRoutes = computed(() => {
      if (currentGroup.value !== -1) {
        // @ts-ignore
        return routes.value[currentGroup.value].routes.map((route) => { return { text: route.text, link: route.link + routes.value[currentGroup.value].base } })
      } else {
        return routes.value
      }
    })

    const displayMenuTitle = computed(() => {
      if (currentGroup.value !== -1) {
        // @ts-ignore
        return routes.value[currentGroup.value].text
      } else {
        return 'LingoX'
      }
    })

    return { routes, drawer, currentGroup, displayRoutes: displayMenuRoutes, displayMenuTitle, info, actions }
  }
})
</script>
