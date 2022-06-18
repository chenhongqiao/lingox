<template>
  <div class="my-8">
    <v-container>
      <div class="mx-md-14">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          Our Mission
        </div>
        <h1 class="text-h1">
          Educate.
        </h1>
        <div class="text-body-1 secondary--text mt-4">
          We provide free 1-on-1 English language tutoring to student from underserved communities all over the world.
        </div>
      </div>
    </v-container>
    <v-parallax height="600" class="mt-4" :src="require('@/assets/images/hero.jpg')" />
    <v-container class="py-4 py-lg-8 mt-4">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img :src="require('@/assets/images/feature-1.jpg')" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-h3">
            Our Mission
          </h3>
          <div class="text-body-1 mt-5">
            Ensuring that all students have access to quality, authentic foreign language education, regardless of income level.
          </div>
          <div class="mt-4">
            <nuxt-link to="/about/mission" class="text-decoration-none font-weight-bold text-h6">
              Learn More
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-4 py-lg-8 mt-4">
      <v-row align="center">
        <v-col cols="12" md="6">
          <h3 class="text-h3">
            Our Team
          </h3>
          <div class="text-body-1 mt-5">
            Meet the people behind the scenes of LingoX.
          </div>
          <div class="mt-4">
            <nuxt-link to="/team/board" class="text-decoration-none font-weight-bold text-h6">
              Learn More
            </nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img :src="require('@/assets/images/feature-2.jpeg')" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-6">
      <h3 class="text-h3">
        Get Involved
      </h3>
      <v-row class="mt-1">
        <v-col v-for="(item,index) in involved" :key="index">
          <div class="text-uppercase font-weight-bold primary--text mb-2">
            {{ item.title }}
          </div>
          <div class="text-body-1">
            {{ item.content }}
          </div>
          <!--v-btn :to="item.link" x-large color="primary" class="mt-4">
            Learn More
          </v-btn-->
          <v-btn :to="item.link" x-large color="primary" class="mt-4" disabled>
            Coming Soon
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
interface Involved {
  title: string
  content: string
  link: string
}
export default defineComponent({
  name: 'IndexPage',
  setup () {
    const involved: Ref<Involved[]> = ref([{
      title: 'Enroll A Student',
      content: 'Receive personalized, live English tutoring free-of-charge.',
      link: '/involved/enroll'
    },
    {
      title: 'Become a Tutor',
      content: 'Meet virtually with students in China to help improve their English!',
      link: '/involved/tutor'
    }, {
      title: 'Join Our Team',
      content: 'Ready to make a major change in the world? Apply to the LingoX board.',
      link: '/involved/join'
    }])

    return { involved }
  }
})
</script>
