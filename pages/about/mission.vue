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
            Especially in the past few decades, language has become one of the most integral components of education, especially English and Chinese. For many, they’re even mandated as a second languages due to their universality. In fact, those with greater English and Chinese proficiency are often rewarded with many more opportunities in the workforce. However, students living in less urban areas often lack sufficient resources and support to help them improve in foreign languages.
          </div>
          <div class="text-body-1 mt-3">
            In order to address this problem, LingoX connects English-speaking and Chinese-speaking volunteers to these students for the purpose of providing live instruction and an opportunity to converse with native speakers. Within the curriculum, there is a heavy emphasis on conversational language that can be used in the workforce and in daily life.
          </div>
          <div class="text-body-1 mt-3">
            LingoX recognizes the potential that every student encompasses and strives to provide them with all the necessary resources to succeed in a future career path of their choice, making sure that socioeconomic status is never a barrier.
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
