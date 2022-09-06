<template>
  <div>
    <div v-for="(person, i) in team" :key="i">
      <v-divider v-if="i !== 0" />
      <v-row class="py-3" align="center">
        <v-col v-if="person.image" sm="3" cols="12">
          <v-img :src="person.image" max-height="400" class="elevation-6 rounded" />
        </v-col>
        <v-col sm="9" cols="12">
          <div class="text-h5">
            {{ person.name }}
          </div>
          <div v-if="person.position" class="text-h6 secondary--text">
            {{ $parent.$t(person.position) }}
          </div>
          <div v-if="person.bio" class="text-body-1 mt-3">
            {{ $parent.$t(person.bio) }}
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script lang="ts">
interface Member {
  name: string
  image?: string
  bio?: string
  position?: string
}
export default defineComponent({
  name: 'RosterComponent',
  props: {
    team: {
      type: Array as () => Member[],
      required: true
    }
  }
})
</script>
