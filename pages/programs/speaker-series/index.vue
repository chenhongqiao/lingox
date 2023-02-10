<template>
  <div>
    <v-container class="pt-4 pt-lg-8">
      <h3 class="text-h3">
        {{ $t('speakerSeries') }}
      </h3>
      <div class="text-uppercase font-weight-bold primary--text mb-2 mt-4">
        {{ $t('programDetails') }}
      </div>
      <div v-for="(text,index) in Object($t('paragraph'))" :key="index">
        <div class="text-body-1 mb-2">
          {{ text }}
        </div>
      </div>
    </v-container>
    <v-container class="mt-n2 pt-0">
      <v-row>
        <v-col v-for="video in videos" :key="video.title" cols="4">
          <v-card :to="'/programs/speaker-series/'+video.slug">
            <v-img :src="video.thumbnail" />
            <v-card-title>{{ video.speaker }}</v-card-title>
            <v-card-subtitle>{{ video.title }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<i18n lang="yaml">
en:
  paragraph:
    - "Interested in learning about different pathways and careers, such as business, medicine, computer science, and international relations? Look no further! LingoX has invited a collection of extraordinary speakers to deliver lectures and answer questions on their major of choice. Our speaker series features a different spotlighted educational consultant every month. These experienced guests speakers are highly-qualified and attend institutions such as Harvard, Stanford, UPenn, Johns Hopkins, Cornell, UCLA, UC Berkeley, and more."
    - "Their expertise is heightened by the fact that all of them have gone through the same trials and tribulations that most students do. As such, tuning in to their firsthand experiences offers spectacular foresight into what one should expect when progressing through   certain academic or career journeys. Speakers will give you the insider’s perspective on their specialization, both the good and the bad, helping you to make an informed choice when it comes to the crossroads of life. After hearing their stories, you may even be inspired to pursue interdisciplinary studies, combining your favorite subjects. The possibilities are endless!"
  form:
    firstName: "First Name*"
    lastName: "Last Name*"
    email: "Email*"
    cityState: "City/State*"
    country: "Country*"
    pathway: "Intended Pathway/Major*"
    question: "Any question for our speakers?"
    income: "Household Income*"
zh:
  paragraph:
    - "你想了解关于大学专业选择和未来职业发展吗？LingoX每月定期邀请来自世界排名前20大学的优秀学生，与我们分享他们申请大学选择专业的经历和经验以及他们对所选专业未来发展前景和趋势的分析和看法。他们分别来自哈佛大学、斯坦福大学、宾夕法尼亚大学、约翰霍普金斯大学、康奈尔大学、加州大学洛杉矶分校、加州大学伯克利分校，以及牛津大学，剑桥大学… 涉及的专业包括公商管理，金融，经济学，医学、计算机科学和国际关系等。"
    - "我们的嘉宾讲座可以帮助你更多了解英美大学的申请过程，如何制定大学选校名单，加入研究性实习，申请入职等等。"
    - "如需深入了解和订阅，请填写右侧问卷完成注册!"
  form:
    firstName: "名*"
    lastName: "姓*"
    email: "邮箱*"
    cityState: "城市*"
    country: "国家*"
    pathway: "意向职业方向/专业*"
    income: "家庭收入*"
    question: "您有没有想问演讲者的任何问题？"
</i18n>
<script>
export default {
  name: 'SpeakerSeriesPage',
  async asyncData ({ params, error, $content }) {
    const videos = await $content('videos').sortBy('date', 'desc').fetch()
    return { videos }
  },
  head: {
    title: 'Speaker Series'
  }
}
</script>
