<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('speakerSeries') }}
      </h3>
      <v-row class="mt-4">
        <v-col cols="12" md="7">
          <div class="text-uppercase font-weight-bold primary--text mb-2">
            {{ $t('programDetails') }}
          </div>
          <div v-for="text in $t('programParagraph')">
            <div class="text-body-1 mb-2">
              {{ text }}
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-card class="pa-1" flat>
            <v-card-title>{{ $t('registrationForm') }}</v-card-title>
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
                  v-model="formData.pathway"
                  label="Intended Pathway/Major*"
                  :rules="[
                    v => !!v || 'Pathway is required']"
                />
                <v-text-field
                  v-model="formData.question"
                  label="Any question for our speakers?"
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
   - "Interested in learning about different pathways and careers, such as business, medicine, computer science, and international relations? Look no further! LingoX has invited a collection of extraordinary speakers to deliver brief lectures and answer questions on their major of choice. Sign up below to tune in!"
zh:
  programParagraph:
   - "Interested in learning about different pathways and careers, such as business, medicine, computer science, and international relations? Look no further! LingoX has invited a collection of extraordinary speakers to deliver brief lectures and answer questions on their major of choice. Sign up below to tune in!"
</i18n>
</i18n>
<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SpeakerSeries',
  setup () {
    const { $axios } = useContext()
    const formData = ref({
      name: '',
      email: '',
      location: '',
      pathway: '',
      question: ''
    })
    const valid = ref(false)
    const form: any = ref(null)
    const submitting = ref(false)
    const done = ref(false)
    const error = ref(false)
    const submit = async () => {
      submitting.value = true
      try {
        await $axios.$post('https://v1.nocodeapi.com/harrychen/google_sheets/yTtCTpNMoGRCXquU', formData.value)
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
    title: 'Speaker Series'
  }
})
</script>
