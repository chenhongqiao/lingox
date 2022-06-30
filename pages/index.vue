<template>
  <div class="my-md-8 my-4">
    <v-container>
      <div class="mx-md-14">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          {{ $t('ourMission') }}
        </div>
        <h1 class="text-md-h1 text-h2">
          {{ $t('teach') }}
        </h1>
        <div class="text-body-1 secondary--text mt-4">
          {{ $t('heroText') }}
        </div>
      </div>
    </v-container>
    <v-parallax max-height="600" class="mt-4" :src="$img('hero.jpg')" />
    <v-container class="py-4 py-md-10">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img :src="$img('feature-1.jpg')" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-h3">
            {{ $t('ourMissionButTask') }}
          </h3>
          <div class="text-body-1 mt-5">
            {{ $t('missionText') }}
          </div>
          <div class="mt-4">
            <nuxt-link to="/about/mission" class="text-decoration-none font-weight-bold text-h6">
              {{ $t('learnMore') }}
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-4 py-md-10">
      <v-row align="center">
        <v-col cols="12" md="6" class="d-md-none">
          <v-img :src="$img('feature-2.jpeg')" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-h3">
            {{ $t('ourTeam') }}
          </h3>
          <div class="text-body-1 mt-5">
            {{ $t('teamText') }}
          </div>
          <div class="mt-4">
            <nuxt-link to="/team/board" class="text-decoration-none font-weight-bold text-h6">
              {{ $t('learnMore') }}
            </nuxt-link>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-none d-md-flex">
          <v-img :src="$img('feature-2.jpeg')" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-4 py-md-8">
      <h3 class="text-h3">
        {{ $t('getInvolved') }}
      </h3>
      <v-row class="mt-1">
        <v-col v-for="(item,index) in involved" :key="index">
          <div class="text-uppercase font-weight-bold primary--text mb-2">
            {{ $t(item.title) }}
          </div>
          <div class="text-body-1">
            {{ $t(item.content) }}
          </div>
          <!--v-btn :to="item.link" x-large color="primary" class="mt-4">
            Learn More
          </v-btn-->
          <v-btn :to="item.link" x-large color="primary" class="mt-4">
            {{ $t('learnMore') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<i18n lang="yaml">
en:
  teach: Teach.
  heroText: We provide free language tutoring to students from underserved communities all over the world.
  missionText: Ensuring that all students have access to quality, authentic foreign language education, regardless of income level.
  teamText: Meet the people behind the scenes of LingoX.
  studentText: Receive personalized, live English tutoring free-of-charge.
  tutorText: Meet virtually with students in China to help improve their English!
  joinTeamText: Ready to make a major change in the world? Apply to the LingoX board.
zh:
  teach: 教育
  heroText: 我们为全世界未得到充分服务的群体提供免费的语言辅导。
  missionText: 致力于让所有学生，无论收入水平，都能获得高质量的地道外语教育。
  teamText: 在幕后运作LingoX的人们。
  studentText: 获得免费的个性化英语直播辅导。
  tutorText: 在线帮助远在中国的学生提升他们的英语。
  joinTeamText: 准备好为一个更好的世界贡献自己的力量了吗？加入我们的领导团队。
</i18n>
<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
interface Involved {
  title: string
  content: string
  link: string
}
export default defineComponent({
  name: 'IndexPage',
  setup () {
    const involved: Ref<Involved[]> = ref([{
      title: 'enrollStudent',
      content: 'studentText',
      link: '/involved/enroll'
    },
    {
      title: 'becomeTutor',
      content: 'tutorText',
      link: '/involved/tutor'
    }, {
      title: 'joinTeam',
      content: 'joinTeamText',
      link: '/involved/join'
    }])

    return { involved }
  },
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'LingoX provides free language tutoring to students from underserved communities all over the world.'
      }
    ]
  }
})
</script>
