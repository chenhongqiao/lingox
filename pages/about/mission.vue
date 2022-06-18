<template>
  <div>
    <v-container class="mt-8 mb-4 text-center">
      <v-img :src="require('~/assets/images/mission-1.jpg')" alt="" class="rounded elevation-3 mb-6" />
    </v-container>
    <v-container class="my-4">
      <v-row align="center">
        <v-col cols="12" md="7">
          <h3 class="text-h3 primary--text">
            Our Mission
          </h3>
          <div class="text-body-1 mt-5">
            Especially in the past few decades, language has become one of the most integral components of education and, in turn, life success. In particular, English and Chinese have stood out as two key global languages, with several billion people using both languages for business or everyday communication. For many, they are even mandated as second languages due to their universality. In fact, those with greater English and Chinese proficiency are often rewarded with many more opportunities in the workforce, which then leads to improved life outcomes such as higher salaries and a better standard of living. However, students living in less urban areas often lack sufficient resources and support to help them improve in foreign languages.
          </div>
          <div class="text-body-1 mt-3">
            In order to address this problem, LingoX connects English-speaking and Chinese-speaking volunteers to these students for the purpose of providing free live instruction and conversation with native speakers. Within the curriculum, there is a heavy emphasis on conversational language that can be used in the workforce and in daily life. In order to match society’s ever-developing needs, the curriculum taught by LingoX tutors is also updated weekly by specialized developers with real-world experience to ensure that our students are kept at the forefront of versatile education.
          </div>
          <div class="text-body-1 mt-3">
            LingoX recognizes the potential that every student encompasses and strives to provide them with all the necessary resources to succeed in a future career path of their choice, making sure that socioeconomic status and lacking language skills is never a barrier. Here at LingoX, our uniqueness is our flexibility. We refuse to impose an unconforming, rigid curriculum upon our students, LingoX tutors work around the student’s schedule, at a pace which suits the student’s personal learning speed.
          </div>
          <div class="text-body-1 mt-3">
            Our work is directed toward assisting underserved schoolchildren in communities such as China, Africa, and India by teaching English and Chinese. More broadly, however, LingoX strives to support all students, including refugees of war, who lack proper educational assistance  – which is why any students in need of aid are welcome to enroll completely free of charge.
          </div>
        </v-col>
        <v-col cols="12" md="5" class="d-md-flex d-none">
          <v-img :src="require('@/assets/images/mission-2.jpg')" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-6 mb-12">
      <v-row align="center">
        <v-col cols="4">
          <v-img :src="require('@/assets/images/mission-3.jpg')" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
        <v-col>
          <div>
            <div class="text-h5" style="font-family: Alice, sans-serif !important">
              <i>"LingoX’s work has opened up countless windows of opportunity for our students."</i>
            </div>
            <div class="text-h6 mt-3">
              Sun Ling
            </div>
            <div class="text-h7 secondary--text">
              Principal of ChengXin Elementary School (Guangdong, China)
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'MissionPage'
})
</script>
