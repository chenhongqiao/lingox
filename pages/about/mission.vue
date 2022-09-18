<template>
  <div>
    <v-container class="pt-md-8 pb-md-4 text-center pt-4">
      <v-img src="/images/mission-1.jpg" max-height="600" class="rounded elevation-3 mb-6" />
    </v-container>
    <v-container class="py-md-4 pt-0">
      <v-row align="center">
        <v-col cols="12" md="7">
          <h3 class="text-h3">
            {{ $t('ourMission') }}
          </h3>
          <div class="text-body-1 mt-5">
            {{ $t(('missionStatements[0]')) }}
          </div>
          <div class="text-body-1 mt-2">
            {{ $t('missionStatements[1]') }}
          </div>
          <div class="text-body-1 mt-2">
            {{ $t('missionStatements[2]') }}
          </div>
          <div class="text-body-1 mt-2">
            {{ $t('missionStatements[3]') }}
          </div>
        </v-col>
        <v-col cols="12" md="5" class="d-md-flex d-none">
          <v-img src="/images/mission-2.jpg" class="rounded-lg elevation-6" max-height="480" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<i18n lang="yaml">
en:
  missionStatements:
    - "Especially in the past few decades, language has become one of the most integral components of education and, in turn, life success. In particular, English and Chinese have stood out as two key global languages, with several billion people using both languages for business or everyday communication. For many, they are even mandated as second languages due to their universality. In fact, those with greater English and Chinese proficiency are often rewarded with many more opportunities in the workforce, which then leads to improved life outcomes such as higher salaries and a better standard of living. However, students living in less urban areas often lack sufficient resources and support to help them improve in foreign languages."
    - "In order to address this problem, LingoX connects English-speaking and Chinese-speaking volunteers to these students for the purpose of providing free live instruction and conversation with native speakers. Within the curriculum, there is a heavy emphasis on conversational language that can be used in the workforce and in daily life. In order to match society’s ever-developing needs, the curriculum taught by LingoX tutors is also updated weekly by specialized developers with real-world experience to ensure that our students are kept at the forefront of versatile education."
    - "LingoX recognizes the potential that every student encompasses and strives to provide them with all the necessary resources to succeed in a future career path of their choice, making sure that socioeconomic status and lacking language skills is never a barrier. Here at LingoX, our uniqueness is our flexibility. We refuse to impose an unconforming, rigid curriculum upon our students, LingoX tutors work around the student’s schedule, at a pace which suits the student’s personal learning speed."
    - "Besides language education, LingoX also offers free training camps for those who wish to improve their public speaking as well as a mentorship program directed toward protecting mental health. LingoX strives to support all students, including refugees of war, who lack proper educational assistance – which is why any students in need of aid are welcome to enroll completely free of charge."
zh:
  missionStatements:
    - 在过去的几十年里，语言已经成为教育中最不可缺的重要组成部分之一，进而成为人生成功的一部分。特别是，英语和汉语作为两种主要的全球语言脱颖而出，数十亿人使用这两种语言进行商务或日常交流。对于许多人来说，由于它们的普遍性，它们甚至被强制作为第二语言。事实上，那些英语和中文熟练程度更高的人通常会在工作中获得更多机会，从而改善生活成果，例如更高的薪水和更好的生活水平。然而，居住在某些城市地区的学生往往缺乏足够的资源和支持来帮助他们提高外语水平。
    - 为了解决这个问题，LingoX 将说英语和说中文的志愿者与这些学生联系，提供免费的指导培训以及与母语人士的对话。我们为学习者设计了实用性极高的课程，重点强调在日常工作和生活中高频率使用的会话语言。为了满足社会不断发展的需求，LingoX 导师们教授的课程也每周由具有实际经验的专业开发人员更新，以确保我们的学生始终处于多元化教育的最前沿。
    - LingoX 重视每个学生所拥有的潜力，并努力为他们提供所有必要的资源，帮助他们在未来选择的职业道路上取得成功，确保社会经济地位和缺乏语言技能永远不会成为他们的障碍。在 LingoX，我们的独特之处在于我们的灵活性。我们拒绝将不符合标准的、僵化的课程强加给我们的学生，LingoX 导师会根据学生的日程安排，用适合学生个体的学习进程进行指导。
    - 我们的工作旨在通过教授英语和汉语来帮助中国、非洲和印度等社区语言教育服务不足的学童。更广泛地说，LingoX 努力支持所有学生，包括那些缺乏合适教育的战争难民等提供援助 ——这就是为什么任何需要援助的学生都可以完全免费注册。
</i18n>
<script lang="ts">
export default defineComponent({
  name: 'MissionPage',
  head: {
    title: 'Mission'
  }
})
</script>
