<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3">
        Frequently Asked Questions
      </h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>

    <v-row class="mt-6">
      <v-col
        v-for="(item, i) in FAQs"
        :key="i"
        cols="12"
        lg="6"
      >
        <div class="text-h6 font-weight-bold">
          {{ item.question }}
        </div>
        <div class="text-body-1 secondary--text mt-2">
          {{ item.answer }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
interface FAQ {
  question: string
  answer: string
}
export default defineComponent({
  name: 'FaqPage',
  setup () {
    const FAQs: Ref<FAQ[]> = ref([
      {
        question: 'What is the cost of enrolling in a LingoX program?',
        answer: 'As part of our commitment to making education accessible to everyone, enrollment in any LingoX program is offered free of charge thanks to our wonderful volunteers and kind sponsors!'
      }, {
        question: 'When are the lessons?',
        answer: 'We understand that many of our students may have very busy schedules. As such, LingoX offers personalized curricula with flexible scheduling, meaning that students can choose what time works best for them and at what pace they wish to learn. Once the student is matched with a LingoX Tutor, contact details will be provided for both parties to arrange a time that works best.'
      }, {
        question: 'Can I select my tutor?',
        answer: 'Due to logistical reasons, LingoX staff will be responsible for matching students and tutors. All LingoX tutors undergo an extensive approval process, so parents and students can rest assured that not only are our tutors incredibly patient and supportive toward all types of learners, but they also maintain extensive knowledge of the curriculum.'
      }, {
        question: 'Is it possible to change my tutor after a few lessons?',
        answer: 'We strive to provide only the most qualified tutors to support student learning. If, after 1-2 sessions, you feel that your tutor cannot properly address your needs, you may email contact@lingox.org to request a change. However, placement is dependent on availability and an alternative selection cannot be guaranteed.'
      }, {
        question: 'Am I guaranteed a tutor?',
        answer: 'To this day, LingoX has yet to leave a student unmatched. Should there be an unanticipated increase in students, we will try our best to meet everyone’s demand; however, please note that LingoX may prioritize certain populations depending on assessed need, such as children currently unable to attend school due to war or natural disasters.'
      }
    ])

    return { FAQs }
  }
})
</script>
