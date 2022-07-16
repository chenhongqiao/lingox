<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      {{ $t('applyToBoard') }}
    </h3>
    <v-row class="mt-4">
      <v-col cols="12" md="7">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          {{ $t('getInvolved') }}
        </div>
        <div class="text-body-1 mb-3">
          {{ $t('programText') }}
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-1" flat>
          <v-card-title>{{ $t('applicationForm') }}</v-card-title>
          <v-card-text>
            <v-text-field label="Name" dense disabled />
            <v-text-field label="Email" dense disabled />
            <v-btn block color="primary" large disabled>
              {{ $t('closed') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<i18n lang="yaml">
en:
  programText: "Applications for the 2022-2023 LingoX Executive Board are currently closed! We generally welcome new Executive Board members every summer. Please follow our Instagram @lingoxofficial for updates!"
zh:
  programText: "Applications for the 2022-2023 LingoX Executive Board are currently closed! We generally welcome new Executive Board members every summer. Please follow our Instagram @lingoxofficial for updates!"
</i18n>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ApplyBoard',
  head: {
    title: 'Apply to Board'
  }
})
</script>
