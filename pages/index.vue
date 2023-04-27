<template>
  <div class="my-md-8 my-4">
    <v-container>
      <div class="mx-md-14">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          {{ $t('ourMission') }}
        </div>
        <h1 class="text-md-h1 text-h2">
          {{ $t('educate') }}
        </h1>
        <div class="text-body-1 secondary--text mt-4">
          {{ $t('heroText') }}
        </div>
      </div>
    </v-container>
    <v-parallax max-height="600" class="mt-4" src="/images/hero.jpg" />

    <v-container class="py-4 py-md-8">
      <h3 class="text-h3">
        {{ $t('programs') }}
      </h3>
      <div class="d-none d-md-block">
        <v-row class="mt-1">
          <v-col v-for="(item, index) in involved" :key="index" cols="4">
            <h2 class="text-h5 mb-3 primary--text">
              {{ $t(item.title) }}
            </h2>
            <div class="text-body-1">
              {{ $t(item.content) }}
            </div>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-n6">
          <v-col v-for="(item, index) in involved" :key="index" cols="4">
            <v-btn :to="item.link" x-large color="primary" class="mt-4">
              {{ $t('learnMore') }}
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <div class="d-md-none">
        <v-row class="mt-1">
          <v-col v-for="(item, index) in involved" :key="index" cols="12">
            <h2 class="text-h5 mb-3 primary--text">
              {{ $t(item.title) }}
            </h2>
            <div class="text-body-1">
              {{ $t(item.content) }}
            </div>
            <v-btn :to="item.link" large color="primary" class="mt-4 text-right mr-6">
              Learn More
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-container class="py-4 py-md-10">
      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img src="/images/feature-1.jpg" class="rounded-lg elevation-6" max-height="480" />
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

    <v-container class="pt-4 pb-2">
      <h3 class="text-h3 text-center">
        {{ $t('ourImpact') }}
      </h3>
      <v-row class="mt-8" dense>
        <v-col
          v-for="(item, i) in stats"
          :key="i"
          cols="12"
          md="4"
          class="text-center"
        >
          <v-card class="pa-4" height="95%">
            <div class="text-h2">
              {{ item.value }}
            </div>
            <div class="text-h6  mt-2">
              {{ $t(item.label) }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-4 py-md-10">
      <v-row align="center">
        <v-col cols="12" md="6" class="d-md-none">
          <v-img src="/images/hero.jpg" class="rounded-lg elevation-6" max-height="480" />
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
          <v-img src="/images/feature-2.jpg" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<i18n lang="yaml">
en:
  educate: Educate.
  heroText: We provide free language tutoring to students from underserved communities all over the world.
  missionText: "Ensuring that all students have access to quality, authentic foreign language education, regardless of income level."
  teamText: Meet the people behind the scenes of LingoX.
  introChineseText: Interested in learning Chinese, but find yourself lacking the resources to get started? LingoX is offering a FREE introductory program open to students with demonstrated need!
  introEnglishText: Do you want to improve your English skills? Register to join English Classroom, LingoX’s English amazing curriculum delivery program!
  speakerSeriesText: Interested in learning about different pathways and careers, such as business, medicine, computer science, and international relations? Check out our Speaker Series!
  continentsReached: "Continents Reached"
  countriesReached: "Countries Reached"
  belowAverageIncome: "Below Average US Household Income"
  collectiveInstruction: "Hours of Collective Instruction Offered"
  freeTuition: "Worth of Free Tuition Offered"
  feltImproved: "Felt Their Chinese Improved"
zh:
  educate: 传播知识
  heroText: LingoX为全世界的弱势群体提供免费便捷的语言教育。
  missionText: 确保全世界任何好奇的学生都能获得免费，地道的语言教育。无论家庭条件。
  teamText: 在幕后运作LingoX的人们。
  introChineseText: "LingoX 为全球需要学习汉语的学生提供免费的汉语入门课程！我们的课程重点教授“用得上，说得了”的实用汉语，帮助我们的学生快速掌握运用汉语进行日常交流。"
  introEnglishText: "你想提高你的英语技能吗？欢迎申请LingoX“英语课堂”项目。 LingoX的课程开发团队针对中国学生量身定制了简单易懂，实用性极强的专属课程。"
  speakerSeriesText: "LingoX每月定期邀请来自世界排名前20大学的优秀学生，与我们分享他们申请大学选择专业的经历和经验以及他们对所选专业未来发展前景和趋势的分析和看法。"
  continentsReached: "个大陆"
  countriesReached: "个国家"
  belowAverageIncome: "来自低收入家庭"
  collectiveInstruction: "人次课程"
  freeTuition: "节省学费"
  feltImproved: "认为课程有帮助"
</i18n>
<script>
export default {
  name: 'HomePage',
  data () {
    return {
      involved: [{
        title: 'introChinese',
        content: 'introChineseText',
        link: '/programs/intro-chinese'
      },
      {
        title: 'englishClassroom',
        content: 'introEnglishText',
        link: '/programs/english-classroom'
      }, {
        title: 'speakerSeries',
        content: 'speakerSeriesText',
        link: '/programs/speaker-series'
      }],
      stats: [
        {
          label: 'continentsReached',
          value: '6'
        },
        {
          label: 'countriesReached',
          value: '117'
        },
        {
          label: 'belowAverageIncome',
          value: '97%'
        },
        {
          label: 'collectiveInstruction',
          value: '12K'
        },
        {
          label: 'freeTuition',
          value: '$756K'
        },
        {
          label: 'feltImproved',
          value: '100%'
        }
      ]
    }
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
}
</script>
