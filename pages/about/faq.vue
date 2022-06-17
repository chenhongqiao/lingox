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
        answer: 'None at all! LingoX strives to break down barriers in education by eliminating fees.'
      }, {
        question: 'When are the lessons?',
        answer: 'You decide! Once a match is finalized, contact details will be provided for the tutor communicate with the student to select a time that works best for both parties.'
      }, {
        question: 'Can I select my tutor?',
        answer: 'Unfortunately, due to logistical reasons, LingoX staff will be responsible for matching students and tutors. However, you can rest assured that all LingoX tutors are knowledgeable, patient, and supportive.'
      }, {
        question: 'Is it possible to change my tutor after a few lessons?',
        answer: 'If, after 1-2 sessions, you feel that the tutor cannot properly address your needs, you may email contact@lingox.org to request a change. However, placement is dependent on availability and an alternative selection is not guaranteed.'
      }
    ])

    return { FAQs }
  }
})
</script>
