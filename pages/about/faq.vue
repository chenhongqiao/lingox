<template>
  <v-container class="py-4 py-md-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3">
        {{ $t('faq') }}
      </h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>

    <v-row class="mt-md-6 mt-2">
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
<script>
export default {
  name: 'FAQPage',
  data () {
    return {
      FAQs: [
        {
          question: 'What is the cost of enrolling in a LingoX program?',
          answer: 'As part of our commitment to making education accessible to everyone, enrollment in any LingoX program is offered free of charge thanks to our wonderful volunteers and kind sponsors!'
        }, {
          question: 'How often are the lessons?',
          answer: 'Chinese language lessons will occur once a week. However, we understand that many of our students may have very busy schedules. As such, LingoX will provide a recording of the meeting to students who are unable to attend. It is still highly recommended to attend the meetings when possible, in order to ask questions and practice with other students.'
        }, {
          question: 'Am I guaranteed a spot for the language learning class?',
          answer: 'To this day, students who signed up for the language learning class all successfully attend the class. So as long as you sign up, you will have a spot. And the registration form is on the bio of the official instagram account, which is @lingoxofficial.'
        }, {
          question: 'What does the language learning class look like?',
          answer: 'Lessons for Chinese will be held through an online meeting once a week. Every class will have a different topic, so it is recommended that a student attends every meeting. Attending the class allows students to get any questions answered, and to practice along with the tutor. These lessons have been curated for beginners, with each lesson increasing in difficulty as students’ skills advance. Those who wish to learn the English language will be provided with pre-recorded lectures. These lectures will include presentations to learn English vocabulary, grammar, and how to sound more like a native speaker.'
        }, {
          question: 'How qualified are instructors in LingoX’s classes?',
          answer: 'All of our instructors are either native speakers for the language being taught or have achieved near fluency. Many instructors also use the language on a daily basis, so they will share new slang and language variations for you to use!'
        }
      ]
    }
  },
  head: {
    title: 'FAQs'
  }
}
</script>
