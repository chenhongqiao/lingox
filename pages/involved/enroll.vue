<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      Enroll a Student
    </h3>
    <v-row class="mt-4">
      <v-col cols="12" md="7">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          Program Details
        </div>
        <div class="text-body-1">
          Enroll today with LingoX at zero cost and with a personalized curriculum! In order to make language-learning accessible to everyone, LingoX offers flexibility in course scheduling so that students are able to work at their own pace. We provide useful, relevant content taught by attentive tutors who want to see their students succeed.
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-1" flat>
          <v-card-title>Student Signup</v-card-title>
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
  name: 'EnrollPage'
})
</script>
