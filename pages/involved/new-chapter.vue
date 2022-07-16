<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('startChapter') }}
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
                  v-model="formData.occupation"
                  label="Occupation*"
                  :rules="[
                    v => !!v || 'Occupation is required']"
                />
                <v-text-field
                  v-model="formData.school"
                  label="School (if student)"
                />
                <v-text-field
                  v-model="formData.parentOccupation"
                  label="Parents' Occupation (if minor)"
                />
                <v-text-field
                  v-model="formData.reason"
                  label="Why do you wish to start a LingoX chapter?*"
                  :rules="[
                    v => !!v || 'This field is required']"
                />
                <v-text-field
                  v-model="formData.plan"
                  label="Your Plans*"
                  hint="How do you plan on serving your community’s needs?*"
                  :rules="[
                    v => !!v || 'Plans are required']"
                />
                <v-text-field
                  v-model="formData.timeCommitment"
                  label="Time Commitment*"
                  hint="How much time are you able to commit to LingoX per week?"
                  :rules="[
                    v => !!v || 'Time Commitment is required']"
                />
                <v-text-field
                  v-model="formData.comments"
                  label="Any additional comments?"
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
   - "Although founded in California, LingoX is proud to be represented by many chapters all over the world: from Toronto, Canada to Auckland, New Zealand! We are always looking for passionate minds to carry forth our mission and expand our operations to more communities. Now, you have the opportunity to start your own chapter!"
zh:
  programParagraph:
   - "Although founded in California, LingoX is proud to be represented by many chapters all over the world: from Toronto, Canada to Auckland, New Zealand! We are always looking for passionate minds to carry forth our mission and expand our operations to more communities. Now, you have the opportunity to start your own chapter!"
</i18n>
<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'StartChapter',
  setup () {
    const { $axios } = useContext()
    const formData = ref({
      name: '',
      email: '',
      location: '',
      occupation: '',
      school: '',
      parentOccupation: '',
      reason: '',
      plan: '',
      timeCommitment: '',
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
        await $axios.$post('https://v1.nocodeapi.com/harrychen/google_sheets/CPuMfhpdWCDJGuOe', formData.value)
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
    title: 'Start a Chapter'
  }
})
</script>
