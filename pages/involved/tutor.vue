<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      Become a Tutor
    </h3>
    <v-row class="mt-4">
      <v-col cols="12" md="7">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          Program Details
        </div>
        <div class="text-body-1">
          If you are a fluent speaker in either English, Chinese, or both, and are interested in providing education to others, join the LingoX tutoring team! We are looking for patient, responsive individuals who work well with others. Volunteers may be responsible for individual (one-on-one) lessons or group tutoring.
        </div>
        <div class="text-body-1 mt-3">
          Tutors do not have to worry about building their content from scratch, because we will provide a curriculum and resources to support both you and your students! If requested, volunteer hours can be awarded. In addition, LingoX tutors may be expected to follow up with parents on lesson progress and student behavior.
        </div>
        <div class="text-body-1 mt-3">
          Currently, our main offered languages are English and Chinese – but if you are fluent in other languages, be on the lookout for more opportunities coming soon!
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-1" flat>
          <v-card-title>Tutor Signup</v-card-title>
          <v-card-text>
            <v-text-field label="Name" dense disabled />
            <v-text-field label="Email" dense disabled />
            <v-btn block color="primary" large disabled>
              Coming Soon
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'NewTutorPage'
})
</script>
