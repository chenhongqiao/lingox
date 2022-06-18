<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3">
        Executive Board
      </h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>

    <Roster :team="team" />
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, useContext } from '@nuxtjs/composition-api'
import { Member } from '~/components/Roster.vue'
export default defineComponent({
  name: 'BoardPage',
  setup () {
    const { i18n } = useContext()
    const team: Ref<Member[]> = ref([
      {
        name: 'Mia Lee',
        position: 'Founder + CEO',
        bio: i18n.t('bio.mial').toString(),
        image: require('@/assets/images/team/mial.jpg')
      },
      {
        name: 'David Chen',
        position: 'Chief Marketing Officer',
        bio: i18n.t('bio.david').toString(),
        image: require('@/assets/images/team/david.jpg')
      }, {
        name: 'Hannah Choi',
        position: 'Assistant Marketing Officer',
        bio: i18n.t('bio.hannah').toString(),
        image: require('@/assets/images/team/hannah.png')
      },
      {
        name: 'Jane Wang',
        position: 'Assistant Marketing Officer',
        bio: i18n.t('bio.jane').toString(),
        image: require('@/assets/images/team/jane.png')
      },
      {
        name: 'Mia Hennequin',
        position: 'Chief Development Officer',
        bio: i18n.t('bio.miah').toString(),
        image: require('@/assets/images/team/miah.png')
      }, {
        name: 'Shivali Shrivastava',
        position: 'Assistant Development Officer',
        bio: i18n.t('bio.shivali').toString(),
        image: require('@/assets/images/team/shivali.png')
      }, {
        name: 'Sarah Xie',
        position: 'Assistant Development Officer',
        bio: i18n.t('bio.sarah').toString(),
        image: require('@/assets/images/team/sarah.png')
      }, {
        name: 'Sanjana Ramakrishnan',
        position: 'Chief Financial Officer',
        bio: i18n.t('bio.sanjana').toString(),
        image: require('@/assets/images/team/sanjana.jpg')
      }, {
        name: 'Jia An',
        position: 'Assistant Financial Officer',
        bio: i18n.t('bio.jia').toString(),
        image: require('@/assets/images/team/jia.png')
      }, {
        name: 'Harry Chen',
        position: 'Chief Technology Officer',
        bio: i18n.t('bio.harry').toString(),
        image: require('@/assets/images/team/harry.png')
      }, {
        name: 'Tyler Truong',
        position: 'Assistant Technology Officer',
        bio: i18n.t('bio.tyler').toString(),
        image: require('@/assets/images/team/tyler.png')
      }, {
        name: 'Simone Rothaupt',
        position: 'Chief Public Relations Officer',
        bio: i18n.t('bio.simone').toString(),
        image: require('@/assets/images/team/simone.png')
      }, {
        name: 'Abby Warnock',
        position: 'Assistant Public Relations Officer',
        bio: i18n.t('bio.abby').toString(),
        image: require('@/assets/images/team/abby.png')
      }
    ])

    return { team }
  }
})
</script>
