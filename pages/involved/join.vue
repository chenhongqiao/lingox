<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      Join Our Team
    </h3>
    <v-row class="mt-4">
      <v-col cols="12" md="7">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          Program Details
        </div>
        <div class="text-body-1">
          If you’re passionate about improving language education for underprivileged communities, join the LingoX leadership team! Play a role in the inner workings of LingoX, and collaborate with us behind the scenes in pursuit of maximizing every student’s potential. From Marketing to Finance to Technology, there are numerous opportunities for you to apply your skills and become a part of our international organization.
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-1" flat>
          <v-card-title>Team Application</v-card-title>
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
  name: 'JoinTeamPage',
  head: {
    title: 'Join Our Team'
  }
})
</script>
