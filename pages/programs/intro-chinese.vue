<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('longIntroChinese') }}
      </h3>
      <v-row class="mt-4">
        <v-col cols="12" md="7">
          <div class="text-uppercase font-weight-bold primary--text mb-2">
            {{ $t('programDetails') }}
          </div>
          <div v-for="(text,index) in $t('programParagraph')" :key="index">
            <div class="text-body-1 mb-2">
              {{ text }}
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-card class="pa-1" flat>
            <v-card-title>{{ $t('studentSignup') }}</v-card-title>
            <v-card-text v-if="done" class="text-center">
              <div class="mt-1">
                <v-icon size="60" color="success">
                  mdi-check-circle
                </v-icon>
              </div>
              <div class="mt-2">
                {{ $t('formSubmitted') }}
              </div>
              <v-btn
                class="mt-2"
                color="secondary"
                block
                large
                @click="done=false"
              >
                {{ $t('submitAnotherResponse') }}
              </v-btn>
            </v-card-text>
            <v-card-text v-else>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="formData.name"
                  label="Full Name*"
                  :rules="[
                    v => !!v || 'Name is required']"
                />
                <v-text-field
                  v-model="formData.email"
                  validate-on-blur
                  label="Email*"
                  :rules="[
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'Please enter an valid E-mail',
                  ]"
                />
                <v-text-field
                  v-model="formData.location"
                  label="Location*"
                  hint="City/State, Country"
                  :rules="[
                    v => !!v || 'Location is required']"
                />
                <v-text-field
                  v-model="formData.school"
                  label="School*"
                  :rules="[
                    v => !!v || 'School is required']"
                />
                <v-text-field
                  v-model="formData.grade"
                  label="Grade Level*"
                  :rules="[
                    v => !!v || 'Grade Level is required']"
                />
                <v-text-field
                  v-model="formData.proficiency"
                  label="Proficiency*"
                  hint="Describe your level of proficiency in Chinese"
                  :rules="[
                    v => !!v || 'Proficiency Level is required']"
                />
                <v-text-field
                  v-model="formData.timeZone"
                  label="Time Zone*"
                  :rules="[
                    v => !!v || 'Time Zone is required']"
                />
                <v-text-field
                  v-model="formData.income"
                  label="Household Income*"
                  hint="Please state your approximate annual household income per year (for the purpose of determining eligibility)"
                  :rules="[
                    v => !!v || 'Income is required']"
                />
                <v-text-field
                  v-model="formData.comments"
                  label="Additional Comments"
                />
              </v-form>
              <v-btn
                block
                color="primary"
                large
                :disabled="!valid"
                :loading="submitting"
                @click="submit"
              >
                {{ $t('submit') }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="error"
      color="error"
    >
      An error has occurred while submitting the form. Please try again.
    </v-snackbar>
  </div>
</template>
<i18n lang="yaml">
en:
  programParagraph:
    - "Interested in learning Chinese, but find yourself lacking the resources to get started? LingoX is offering a FREE introductory program open to students with demonstrated need! Classes will be live, taking place on Zoom every week. Our curriculum places a heavy emphasis on “speakable” Chinese and aims to have you talking in Mandarin by the end of our time together. With the help of our skilled and attentive teachers, students will find themselves greatly enjoying their educational experience."
    - "LingoX strives to aid students from underserved communities, who may normally lack such support. We hope that these interactive, accessible Chinese lessons will motivate students to learn a new language and be inspired to connect with others. These lessons will be supplemented by exciting practice in conversational skills, as well as witnessing the language in various forms of entertainment media. By curriculum design, students should be able to engage in conversation in the first session!"
    - "Our course’s live format allows for students to ask questions and have them answered immediately, whilst also receiving ongoing support. Furthermore, our standby Tech Team is prepared to troubleshoot connectivity and software issues. We will also have after-class practice for participants to review and work on, in order to solidify the new knowledge."
    - "It is our firm belief that all those interested in learning Chinese should be granted the means to do so. Ready to study the most spoken language in the world? Sign up now, while limited spots last! No prior background in Chinese is required."
    - "Note: As part of its commitment to serving impoverished students, LingoX may prioritize certain applicants based on their circumstances."
  longIntroChinese: Introduction to Chinese
zh:
  programParagraph:
    - "Interested in learning Chinese, but find yourself lacking the resources to get started? LingoX is offering a FREE introductory program open to students with demonstrated need! Classes will be live, taking place on Zoom every week. Our curriculum places a heavy emphasis on “speakable” Chinese and aims to have you talking in Mandarin by the end of our time together. With the help of our skilled and attentive teachers, students will find themselves greatly enjoying their educational experience."
    - "LingoX strives to aid students from underserved communities, who may normally lack such support. We hope that these interactive, accessible Chinese lessons will motivate students to learn a new language and be inspired to connect with others. These lessons will be supplemented by exciting practice in conversational skills, as well as witnessing the language in various forms of entertainment media. By curriculum design, students should be able to engage in conversation in the first session!"
    - "Our course’s live format allows for students to ask questions and have them answered immediately, whilst also receiving ongoing support. Furthermore, our standby Tech Team is prepared to troubleshoot connectivity and software issues. We will also have after-class practice for participants to review and work on, in order to solidify the new knowledge."
    - "It is our firm belief that all those interested in learning Chinese should be granted the means to do so. Ready to study the most spoken language in the world? Sign up now, while limited spots last! No prior background in Chinese is required."
    - "Note: As part of its commitment to serving impoverished students, LingoX may prioritize certain applicants based on their circumstances."
  longIntroChinese: Introduction to Chinese
</i18n>
<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IntroChinese',
  setup () {
    const { $axios } = useContext()
    const formData = ref({
      name: '',
      email: '',
      location: '',
      school: '',
      grade: '',
      proficiency: '',
      timeZone: '',
      income: '',
      comments: ''
    })
    const valid = ref(false)
    const form: any = ref(null)
    const submitting = ref(false)
    const done = ref(false)
    const error = ref(false)
    const submit = async () => {
      submitting.value = true
      try {
        await $axios.$post('https://form-submission.harrychen.workers.dev/wQKrboWxpYGrcgwc', formData.value)
        done.value = true
        form.value.reset()
      } catch (err) {
        error.value = true
      }
      submitting.value = false
    }
    return { formData, valid, submit, submitting, form, done, error }
  },
  head: {
    title: 'Intro to Chinese'
  }
})
</script>
