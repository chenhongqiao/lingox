<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h3 class="text-h3">
        International Chapters
      </h3>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>
    <h4 class="text-h4 mt-4">
      Southwest China
    </h4>
    <Roster :team="southwest" />

    <h4 class="text-h4 mt-4">
      South China
    </h4>
    <Roster :team="south" />
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
import { Member } from '@/components/Roster.vue'
export default defineComponent({
  name: 'ChapterPage',
  setup () {
    const southwest: Ref<Member[]> = ref([
      {
        name: 'Christina Chen',
        position: 'Director of Development',
        bio: 'Christina Chen is a senior two student in Chongqing No.1 international high school. Although she has not systematically studied media now (but will apply and study media major in the future), she is very interested in media and wants to transmit and obtain information to the outside world through the Internet. Christina enjoys dancing, singing and listening to music in her daily life.',
        image: require('@/assets/images/team/christina.png')
      },
      {
        name: 'Anastasia Mo',
        bio: 'Anastasia Mo (Anastasia Lorente), senior high student of Chongqing Nankai International Study Center, 15 years old. She is a crazy music lover with an artistic soul, also a huge fan of painting and dancing. But she chooses abnormal psychology as her major and dreams to be an criminal psychologist. Psychology, art, and environmental protection fulfill her life.',
        image: require('@/assets/images/team/anastasia.png')
      },
      {
        name: 'Ethan Chen',
        bio: 'Ethan Chen is a student who has just finished the high school entrance examination and graduated from Chongqing No. 1 Middle School. He has no formal international education, but he is very interested in finance and economics. Also he is very willing to participate in public welfare activities. In his spare time, he is fond of playing basketball. He is also the person who particularly good at percussion.',
        image: require('@/assets/images/team/ethan.png')
      },
      {
        name: 'Daisy Wang',
        bio: 'Daisy Wang is a senior 2 student in Chongqing no.1 international high school. She is learning calculus, statistics, physics, economics and many other subjects. She is interested in everything and is looking forward to her future major（maybe law or biochemistry). Daisy enjoys listening to Kpop and watching SF.',
        image: require('@/assets/images/team/daisy.png')
      }
    ])

    const south: Ref<Member[]> = ref([
      {
        name: 'Maggie Liu',
        position: 'Regional Director of Development',
        bio: 'Maggie Liu is a rising Sophomore at LSE majoring in sociology. She is particularly interested in investigating social problems e.g. social inequality through a multi-dimensional approach, excited about how perspectives from different fields within social science interact with each other to unveil the complexity of social issues. She loves sophisticated theories, but she enjoys detailed life experiences more. While keeping a keen interest in what is going on within and beyond Chinese society, she also loves hanging out with friends, making connections with different people, playing and making music, particularly of an impressionist style, of her own, and she is an experienced dancer in Chinese folk dance e.g. Dai dance for over ten years.',
        image: require('@/assets/images/team/maggie.png')
      }
    ])

    return { southwest, south }
  },
  head: {
    title: 'International Chapters'
  }
})
</script>
