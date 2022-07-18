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
          <div v-for="(text,index) in $t('programParagraph')" :key="index">
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
    - "Interested in learning about different pathways and careers, such as business, medicine, computer science, and international relations? Look no further! LingoX has invited a collection of extraordinary speakers to deliver lectures and answer questions on their major of choice. Our speaker series features a different spotlighted educational consultant every month. These experienced guests speakers are highly-qualified and attend institutions such as Harvard, Stanford, UPenn, Johns Hopkins, Cornell, UCLA, UC Berkeley, and more."
    - "Their expertise is heightened by the fact that all of them have gone through the same trials and tribulations that most students do. As such, tuning in to their firsthand experiences offers spectacular foresight into what one should expect when progressing through   certain academic or career journeys. Speakers will give you the insider’s perspective on their specialization, both the good and the bad, helping you to make an informed choice when it comes to the crossroads of life. After hearing their stories, you may even be inspired to pursue interdisciplinary studies, combining your favorite subjects. The possibilities are endless!"
    - "By following along with the series, you’ll learn about opportunities for high school students, the US college application process, how to make a college list, finding research internships, applying to jobs, and more! Sign up below to tune in!"

zh:
  programParagraph:
    - "Interested in learning about different pathways and careers, such as business, medicine, computer science, and international relations? Look no further! LingoX has invited a collection of extraordinary speakers to deliver lectures and answer questions on their major of choice. Our speaker series features a different spotlighted educational consultant every month. These experienced guests speakers are highly-qualified and attend institutions such as Harvard, Stanford, UPenn, Johns Hopkins, Cornell, UCLA, UC Berkeley, and more."
    - "Their expertise is heightened by the fact that all of them have gone through the same trials and tribulations that most students do. As such, tuning in to their firsthand experiences offers spectacular foresight into what one should expect when progressing through   certain academic or career journeys. Speakers will give you the insider’s perspective on their specialization, both the good and the bad, helping you to make an informed choice when it comes to the crossroads of life. After hearing their stories, you may even be inspired to pursue interdisciplinary studies, combining your favorite subjects. The possibilities are endless!"
    - "By following along with the series, you’ll learn about opportunities for high school students, the US college application process, how to make a college list, finding research internships, applying to jobs, and more! Sign up below to tune in!"
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
        await $axios.$post('https://form-submission.harrychen.workers.dev/yTtCTpNMoGRCXquU', formData.value)
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
