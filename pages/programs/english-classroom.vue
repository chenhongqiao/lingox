<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('englishClassroom') }}
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
            <v-card-title>{{ $t('recipientInfo') }}</v-card-title>
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
                  hint="Country, City/State"
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
                  v-model="formData.occupation"
                  label="Occupation Within School*"
                  :rules="[
                    v => !!v || 'Occupation is required']"
                />
                <v-text-field
                  v-model="formData.needs"
                  label="School Needs*"
                  hint="Please describe your school’s needs (financially, in particular)"
                  :rules="[
                    v => !!v || 'School Needs is required']"
                />
                <v-text-field
                  v-model="formData.distribution"
                  label="Distribution*"
                  hint="How would you be able to distribute these materials?"
                  :rules="[
                    v => !!v || 'Distribution is required']"
                />
                <v-text-field
                  v-model="formData.verification"
                  label="Verification*"
                  hint="Please type below “Yes” to verify that you will make these resources available to all students at your school."
                  :rules="[
                    v => !!v || 'Verification is required']"
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
    - "Do you want to improve your English skills? Register to join English Classroom, LingoX’s English amazing curriculum delivery program! This service is directed toward underprivileged school communities and aims to provide comprehensive, useful language instruction. LingoX’s curriculum developers have spent much time synthesizing materials and preparing these lessons to ensure optimal utility. In order to request these lessons, one must verify their school’s need and ability to distribute the information to all students."
    - "English Classroom’s 2-in-1 lessons revolve around “Everyday English” and “Phonics”. Both being subjects that are integral components to achieving fluency in English -— yet rarely taught in a holistic manner by educational institutions overseas. The former places an emphasis on conversational speaking, while the latter revolves around reading aloud and pronunciation."
    - "With specially curated audio files, participants will also have an opportunity to engage in conversation with native speakers to learn proper pronunciation and grammar. Unlike any other English-teaching program, English Classroom does not impose a rigid curriculum upon its audience, and instead, allows for flexibility in selecting lessons that match one’s need. Additionally, our curriculum is ever-evolving, meaning that you can rest assured that our participants will always be at the forefront of language development. So as to promote maximized outreach, English Classroom operates asynchronously. This means that students will be able to work at their own pace! Best part is? All expenses are covered. This includes curriculum costs, instructors’ time, worksheets, and costs of delivery."
    - "So what are you waiting for? Apply today to enjoy all that English Classroom has to offer!"
zh:
  programParagraph:
    - "Do you want to improve your English skills? Register to join English Classroom, LingoX’s English amazing curriculum delivery program! This service is directed toward underprivileged school communities and aims to provide comprehensive, useful language instruction. LingoX’s curriculum developers have spent much time synthesizing materials and preparing these lessons to ensure optimal utility. In order to request these lessons, one must verify their school’s need and ability to distribute the information to all students."
    - "English Classroom’s 2-in-1 lessons revolve around “Everyday English” and “Phonics”. Both being subjects that are integral components to achieving fluency in English -— yet rarely taught in a holistic manner by educational institutions overseas. The former places an emphasis on conversational speaking, while the latter revolves around reading aloud and pronunciation."
    - "With specially curated audio files, participants will also have an opportunity to engage in conversation with native speakers to learn proper pronunciation and grammar. Unlike any other English-teaching program, English Classroom does not impose a rigid curriculum upon its audience, and instead, allows for flexibility in selecting lessons that match one’s need. Additionally, our curriculum is ever-evolving, meaning that you can rest assured that our participants will always be at the forefront of language development. So as to promote maximized outreach, English Classroom operates asynchronously. This means that students will be able to work at their own pace! Best part is? All expenses are covered. This includes curriculum costs, instructors’ time, worksheets, and costs of delivery."
    - "So what are you waiting for? Apply today to enjoy all that English Classroom has to offer!"
</i18n>
<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'EnglishClassroom',
  setup () {
    const { $axios } = useContext()
    const formData = ref({
      name: '',
      email: '',
      location: '',
      school: '',
      occupation: '',
      needs: '',
      distribution: '',
      verification: ''
    })
    const valid = ref(false)
    const form: any = ref(null)
    const submitting = ref(false)
    const done = ref(false)
    const error = ref(false)
    const submit = async () => {
      submitting.value = true
      try {
        await $axios.$post('https://v1.nocodeapi.com/harrychen/google_sheets/vwnRCzydUaCPbqrP', formData.value)
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
    title: 'Intro to English'
  }
})
</script>
