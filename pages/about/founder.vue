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
    - "From a young age, I have always been fascinated by the concept of language: how different combinations of letters and characters convey meaning and emotion. To me, language has always been something so incredibly beautiful and humanity’s greatest creation. My appreciation for language was only furthered by my exploration of my cultural background.. I have always seen it as a puzzle, and each relevant experience a jigsaw piece. I find myself in constant search of answers, and the more intellectually stimulating the challenge, the more satisfactory to solve."
    - "When I was only a few years old, my studies started with weekly trips to the local Chinese school: learning about the significance of the color red and the marvelous adventures of 大卫 and 小美 (my textbook’s main characters). As I grew older, my thirst for more knowledge about my culture was only fueled by the lack of ethnically similar peers in my Western community. Therefore, when my mother returned to China for work, I chose to accompany her, spending two years in a traditional Chinese boarding school. During this time, I was able to achieve full fluency in Mandarin Chinese — the product of numerous sleepless-but-exhilarating nights spent flipping through novels and dictionaries, armed with a flashlight and pencil. The initial language barriers and culture shock morphed into guiding hands, leading me to regain touch with my identity. It was then that I realized how integral multicultural education is in promoting personal growth and maximizing one’s potential."
    - "Upon returning to the US, I decided to start a social media account to share Chinese language, history, and traditions with others. After receiving much positive feedback, I ventured even further in my mission to promote cross-cultural communication by providing English lessons on Chinese social media too. On Instagram, I became the most highly followed Chinese educator, and in China, I was recognized by WeChat as one of the top English content creators worldwide and achieved the highest level of verification. Today I have nearly 1,000,000 students worldwide and 200,000,000 views on my lessons. Motivated by such a huge demand for language learning, I founded LingoX, with the hopes of providing further language-education support at no charge to underserved school communities."
    - "Within school, I am also an avid public speaker, participating in Speech & Debate as well as MUN, even becoming internationally recognized in both. I enjoy mentoring younger members and guiding them to success with tales of my own firsthand experiences. Outside of academics, I am heavily involved in advocating social issues: promoting teenage mental health and animal rights. I am also an avid reader and am always open to new recommendations!"
    - "In the future, I plan on continuing my work in language education through further studies and career pathways. Certainly, LingoX will be a lifelong project, and I greatly look forward to what the future holds. I will always stand firm in my belief that accessible education is key to facilitating healthy global development and cross-cultural exchange. "
    - "Thank you for your support, I'm so glad to have you with us on this journey."
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
