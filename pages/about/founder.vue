<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      Letter from the Founder
    </h3>
    <v-row class="mt-4">
      <v-col cols="12">
        <div v-for="text in $t('programParagraph')">
          <div class="text-body-1 mb-2">
            {{ text }}
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<i18n lang="yaml">
en:
  programParagraph:
  - "From a young age, I have always been fascinated by the concept of language: how different combinations of letters and characters convey meaning and emotion. To me, language has always been something so incredibly beautiful and humanity’s greatest creation. My appreciation for language was only furthered by my exploration of my cultural background.. I have always seen it as a puzzle, and each relevant experience a jigsaw piece. I find myself in constant search of answers, and the more intellectually stimulating the challenge, the more satisfactory to solve."
  - "When I was only a few years old, my studies started with weekly trips to the local Chinese school: learning about the significance of the color red and the marvelous adventures of 大卫 and 小美 (my textbook’s main characters). As I grew older, my thirst for more knowledge about my culture was only fueled by the lack of ethnically similar peers in my Western community. Therefore, when my mother returned to China for work, I chose to accompany her, spending two years in a traditional Chinese boarding school. During this time, I was able to achieve full fluency in Mandarin Chinese — the product of numerous sleepless-but-exhilarating nights spent flipping through novels and dictionaries, armed with a flashlight and pencil. The initial language barriers and culture shock morphed into guiding hands, leading me to regain touch with my identity. It was then that I realized how integral multicultural education is in promoting personal growth and maximizing one’s potential."
  - "Upon returning to the US, I decided to start a social media account to share Chinese language, history, and traditions with others. After receiving much positive feedback, I ventured even further in my mission to promote cross-cultural communication by providing English lessons on Chinese social media too. On Instagram, I became the most highly followed Chinese educator, and in China, I was recognized by WeChat as one of the top English content creators worldwide and achieved the highest level of verification. Today I have nearly 1,000,000 students worldwide and 200,000,000 views on my lessons. Motivated by such a huge demand for language learning, I founded LingoX, with the hopes of providing further language-education support at no charge to underserved school communities."
  - "Within school, I am also an avid public speaker, participating in Speech & Debate as well as MUN, even becoming internationally recognized in both. I enjoy mentoring younger members and guiding them to success with tales of my own firsthand experiences. Outside of academics, I am heavily involved in advocating social issues: promoting teenage mental health and animal rights. I am also an avid reader and am always open to new recommendations!"
  - "In the future, I plan on continuing my work in language education through further studies and career pathways. Certainly, LingoX will be a lifelong project, and I greatly look forward to what the future holds. I will always stand firm in my belief that accessible education is key to facilitating healthy global development and cross-cultural exchange. "
  - "Thank you for your support, I'm so glad to have you with us on this journey."
  - "Sincerely, Mia Lee (Founder & CEO)"
zh:
  programParagraph:
  - "From a young age, I have always been fascinated by the concept of language: how different combinations of letters and characters convey meaning and emotion. To me, language has always been something so incredibly beautiful and humanity’s greatest creation. My appreciation for language was only furthered by my exploration of my cultural background.. I have always seen it as a puzzle, and each relevant experience a jigsaw piece. I find myself in constant search of answers, and the more intellectually stimulating the challenge, the more satisfactory to solve."
  - "When I was only a few years old, my studies started with weekly trips to the local Chinese school: learning about the significance of the color red and the marvelous adventures of 大卫 and 小美 (my textbook’s main characters). As I grew older, my thirst for more knowledge about my culture was only fueled by the lack of ethnically similar peers in my Western community. Therefore, when my mother returned to China for work, I chose to accompany her, spending two years in a traditional Chinese boarding school. During this time, I was able to achieve full fluency in Mandarin Chinese — the product of numerous sleepless-but-exhilarating nights spent flipping through novels and dictionaries, armed with a flashlight and pencil. The initial language barriers and culture shock morphed into guiding hands, leading me to regain touch with my identity. It was then that I realized how integral multicultural education is in promoting personal growth and maximizing one’s potential."
  - "Upon returning to the US, I decided to start a social media account to share Chinese language, history, and traditions with others. After receiving much positive feedback, I ventured even further in my mission to promote cross-cultural communication by providing English lessons on Chinese social media too. On Instagram, I became the most highly followed Chinese educator, and in China, I was recognized by WeChat as one of the top English content creators worldwide and achieved the highest level of verification. Today I have nearly 1,000,000 students worldwide and 200,000,000 views on my lessons. Motivated by such a huge demand for language learning, I founded LingoX, with the hopes of providing further language-education support at no charge to underserved school communities."
  - "Within school, I am also an avid public speaker, participating in Speech & Debate as well as MUN, even becoming internationally recognized in both. I enjoy mentoring younger members and guiding them to success with tales of my own firsthand experiences. Outside of academics, I am heavily involved in advocating social issues: promoting teenage mental health and animal rights. I am also an avid reader and am always open to new recommendations!"
  - "In the future, I plan on continuing my work in language education through further studies and career pathways. Certainly, LingoX will be a lifelong project, and I greatly look forward to what the future holds. I will always stand firm in my belief that accessible education is key to facilitating healthy global development and cross-cultural exchange. "
  - "Thank you for your support, I'm so glad to have you with us on this journey."
  - "Sincerely, Mia Lee (Founder & CEO)"
  
</i18n>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'FounderPage',
  head: {
    title: 'Founder\'s Letter'
  }
})
</script>
