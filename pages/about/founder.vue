<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      {{ $t('letterFromFounder') }}
    </h3>
    <v-row class="mt-4">
      <v-col cols="12">
        <div v-for="(text,index) in Object($t('paragraph'))" :key="index">
          <div class="text-body-1 mb-2">
            {{ text }}
          </div>
        </div>
        <div class="text-body-1 mb-2 text-right">
          {{ $t('signature') }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<i18n lang="yaml">
en:
  paragraph:
    - "Dear Reader,"
    - "I am deeply honored and humbled to address you today as the founder of LingoX. It is with immense pride and gratitude that I reflect on the journey we have embarked upon, and the impact we've collectively made on the lives of underserved students around the world."
    - "When LingoX was just a vision, I couldn't have imagined the incredible strides we would take to make language education accessible to those who need it most. Our mission has always been clear: to bridge socioeconomic disparities and empower individuals through the power of language. Today, I am thrilled to say that we are not only achieving this mission but surpassing it in ways I could have only dreamt of."
    - "From our humble beginnings to a global presence in over 136 countries across 6 continents, our reach continues to expand, and our impact continues to grow. We've partnered with educational institutions worldwide, collaborated with dedicated volunteers, and witnessed the transformation of countless lives."
    - "In a world where language proficiency has become a key to success, we are ensuring that no one is left behind. We're not just teaching languages; we're opening doors to a world of opportunities. But more importantly, it can lead to greater self-confidence and a belief that dreams can become reality."
    - "As we look back on our journey so far, we see the faces and hear the stories of the students whose lives we've touched."
    - "But our mission is far from over. We still have more lives to impact, more barriers to break, and more dreams to fulfill. We invite you to join us in this extraordinary journey of empowerment, education, and transformation."
    - "While the past few years haven’t been easy — many sleepless nights spent developing curricula and taking 3 a.m. international Zoom calls — whenever we receive an email from a past LingoX student sharing that they have since gone on to secure employment, immigrate in search of a better life, or even reunite with their family, it’s all worth it."
    - "Thank you for your unwavering support, your dedication, and your belief in our mission. Together, we are making a difference."
  signature: "Sincerely, Mia Lee (Founder & CEO)"
zh:
  paragraph:
    - "从小我就对语言的概念很是着迷：通过字母和字符的不同组合来传达意义和情感。对我来说，语言有一种难以置信的美丽，它是人类最伟大的创造。我对文字的欣赏来源于我对不同文化背景的探索。我一直将它看作一个难题，每一个相关经历都是一片拼图。我在不断寻求答案中，越激发自己的智力挑战，越能让问题解决得令人满意。"
    - "在我几岁的时候，我对语言的学习在每周一次的本地中文学校展开：学习文化的重要意义以及大卫和小美（中文教科书中的主要人物）振奋人心的发展旅程。因我一直生活在在西方社区里，等我长大一些，我更加渴望学习了解更多东方文化。我妈妈回中国学习时，我选择了陪伴她，在中国传统寄宿学校里呆过两年，在这段时间里，我完全可以流利地用中文沟通交流，其背后是我在无数不眠日夜里求知若渴般翻读着新华字典和中文小说。起初的语言障碍和文化差异却成为了驱使我前行的动力，我也因此更加明白了多元的文化教育对于个人成长最大化的不可或缺。"
    - "等到回了美国，我在社交媒体平台开设了个人账号用于分享我所学习到的汉语口语和中国文化。在收获全球粉丝的好评和支持喜爱后，我进一步拓展了推进跨文化交流分享的渠道，在中国微信视频号和小红书发布英语教学视频。就这样，目前在Instagram上我是拥有粉丝数量最多的中文教育博主，在中国平台上被评选为优秀视频创作者和最高级别的教育博主认证。现在，我在全球拥有一百多万名学生，我的课程共有超过两亿次观看。在看到大家对语言学习的巨大需求后，我创立了LingoX，希望为贫困山区教育资源不足的学校和社区免费提供更多的语言教育支持。"
    - "在学校里，我也是一个热情的演说者，参加了演讲与辩论社以及任职MUN主席。在这两个方面均获得了国际认可。我喜欢帮助新的成员，并通过我自己的第一手经验来指导他们取得成功。在学术之外，我积极參与和倡导：关注青少年心理健康和保护动物。我也是一个狂热的读者，并对更多更好的建议持开放态度！"
    - "未来，我计划通过持续的学习和实践，坚持我在语言教育方面的工作。当然，LingoX将是一个终身项目，我非常期待它未来的发展。语言，不仅是沟通交流的工具，而且负载着大量的文化内涵。语言教育是促进全球化发展和跨地域、跨文化交流的关键。"
    - "感谢您的支持，我很开心在这趟旅程中有您们相伴！"
  signature: "Mia Lee（创始人兼首席执行官）"
</i18n>
<script>
export default {
  name: 'FounderPage',
  head: {
    title: 'Founder\'s Letter'
  }
}
</script>
