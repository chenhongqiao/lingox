<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      {{ $t('joinTeam') }}
    </h3>
    <v-row class="mt-4">
      <v-col cols="12" md="7">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          {{ $t('programDetails') }}
        </div>
        <div class="text-body-1 mb-3">
          {{ $t('programText') }}
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-1" flat>
          <v-card-title>{{ $t('teamApplication') }}</v-card-title>
          <v-card-text>
            <v-text-field label="Name" dense disabled />
            <v-text-field label="Email" dense disabled />
            <v-btn block color="primary" large disabled>
              {{ $t('comingSoon') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<i18n lang="yaml">
en:
  programText: If you’re passionate about improving language education for underprivileged communities, join the LingoX leadership team! Play a role in the inner workings of LingoX, and collaborate with us behind the scenes in pursuit of maximizing every student’s potential. From Marketing to Finance to Technology, there are numerous opportunities for you to apply your skills and become a part of our international organization.
zh:
  programText: 如果您热衷于改善贫困社区的公益教育，欢迎加入LingoX的领导团队！你可以在LingoX日常的内部工作中发挥作用，并在幕后与我们合作，最大限度地发挥你的的潜力。从市场营销到财务再到科技，您可以从很多方面来帮助我们，并成为我们LingoX的一份子。
</i18n>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'JoinTeamPage',
  head: {
    title: 'Join Our Team'
  }
})
</script>
