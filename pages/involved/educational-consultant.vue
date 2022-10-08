<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('becomeEducationalConsultant') }}
      </h3>
      <v-row class="mt-4">
        <v-col cols="12" md="7">
          <div class="text-uppercase font-weight-bold primary--text mb-2">
            {{ $t('getInvolved') }}
          </div>
          <div v-for="(text,index) in $t('programParagraph')" :key="index">
            <div class="text-body-1 mb-2">
              {{ text }}
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-card class="pa-1" flat>
            <v-card-title>{{ $t('applicationForm') }}</v-card-title>
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
                  :label="$t('form.name')"
                  :rules="[
                    v => !!v || 'Name is required']"
                />
                <v-text-field
                  v-model="formData.email"
                  validate-on-blur
                  :label="$t('form.email')"
                  :rules="[
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'Please enter an valid E-mail',
                  ]"
                />
                <v-text-field
                  v-model="formData.cityState"
                  :label="$t('form.cityState')"
                  :rules="[
                    v => !!v || 'City/State is required']"
                />
                <v-text-field
                  v-model="formData.country"
                  :label="$t('form.country')"
                  :rules="[
                    v => !!v || 'Country is required']"
                />
                <v-text-field
                  v-model="formData.school"
                  :label="$t('form.school')"
                  :rules="[
                    v => !!v || 'School is required']"
                />
                <v-text-field
                  v-model="formData.educationLevel"
                  :label="$t('form.educationLevel')"
                  :rules="[
                    v => !!v || 'Education Level is required']"
                />
                <v-text-field
                  v-model="formData.major"
                  :label="$t('form.major')"
                  :rules="[
                    v => !!v || 'Experience is required']"
                />
                <v-text-field
                  v-model="formData.career"
                  :label="$t('form.career')"
                  :rules="[
                    v => !!v || 'Career is required']"
                />
                <v-text-field
                  v-model="formData.recordingDevice"
                  :label="$t('form.recordingDevice')"
                  hint="Do you have access to filming equipment that can produce clear footage and quality audio? (your phone counts!)"
                  :rules="[
                    v => !!v || 'Recording Device is required']"
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
    - "Our monthly speaker series serves numerous students from all around the world, offering them formal introductions into pathways they may have had little exposure to prior. We are always searching for new guests with interesting stories to tell. If this sounds like you, please apply to become an educational consultant below! Speakers also have the opportunity to discuss interesting projects they may be working on, such as exciting research, app development, or new publications. To express our gratitude, LingoX educational consultants also receive a gratitude package to celebrate our partnership!"
  form:
    name: "Full Name*"
    email: "Email*"
    cityState: "City/State*"
    country: "Country*"
    school: "School*"
    educationLevel: "Education Level*"
    major: "Major*"
    career: "Career*"
    recordingDevice: "Recording Device*"
</i18n>
<script lang="ts">
export default defineComponent({
  name: 'BecomeDeveloper',
  setup () {
    const { $axios } = useNuxtApp()
    const formData = ref({
      name: '',
      email: '',
      cityState: '',
      country: '',
      school: '',
      educationLevel: '',
      major: '',
      career: '',
      recordingDevice: ''
    })
    const valid = ref(false)
    const form: any = ref(null)
    const submitting = ref(false)
    const done = ref(false)
    const error = ref(false)
    const submit = async () => {
      submitting.value = true
      try {
        await $axios.$post('https://form-submission.harrychen.workers.dev/ctybDghzUYyYyrPu', formData.value)
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
    title: 'Become a Curriculum Developer'
  }
})
</script>
