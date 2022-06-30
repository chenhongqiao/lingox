<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('enrollStudent') }}
      </h3>
      <v-row class="mt-4">
        <v-col cols="12" md="7">
          <div class="text-uppercase font-weight-bold primary--text mb-2">
            {{ $t('programDetails') }}
          </div>
          <div class="text-body-1 mb-3">
            {{ $t('programText') }}
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
                  v-model="formData.grade"
                  label="Grade Level*"
                  :rules="[
                    v => !!v || 'Grade Level is required']"
                />
                <v-radio-group
                  v-model="formData.language"
                  :rules="[
                    v => !!v || 'Language is required']"
                >
                  <template #label>
                    <div>
                      Which language would you like to be assisted in?*
                    </div>
                  </template>
                  <v-radio value="English">
                    <template #label>
                      <div>English</div>
                    </template>
                  </v-radio>
                  <v-radio value="Chinese">
                    <template #label>
                      <div>Chinese</div>
                    </template>
                  </v-radio>
                </v-radio-group>
                <v-text-field
                  v-model="formData.proficiency"
                  label="Proficiency*"
                  hint="Describe your level of proficiency within the chosen language"
                  :rules="[
                    v => !!v || 'Proficiency Level is required']"
                />
                <v-text-field
                  v-model="formData.availableTime"
                  label="Time Slots*"
                  hint="When are you available to meet with your tutor? (include days, times, and time zone)"
                  :rules="[
                    v => !!v || 'Time Slots are required']"
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
  programText: Enroll today with LingoX at zero cost and with a personalized curriculum! In order to make language-learning accessible to everyone, LingoX offers flexibility in course scheduling so that students are able to work at their own pace. We provide useful, relevant content taught by attentive tutors who want to see their students succeed.
zh:
  programText: 您随时可以免费申请成为LingoX的学生并享受我们的个性化课程！为了让每个需要帮助的对象获得学习语言的机会，我们提供灵活的课程安排，帮助学生按照自己的节奏学习。我们的导师会根据学生的学习进程给予最大化的支持。
</i18n>
<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'EnrollPage',
  setup () {
    const { $axios } = useContext()
    const formData = ref({
      name: '',
      email: '',
      location: '',
      school: '',
      grade: '',
      language: '',
      proficiency: '',
      availableTime: '',
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
        await $axios.$post('https://form-submission.harrychen.workers.dev/jEnVwbwucBGjdzng', formData.value)
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
    title: 'Enroll a Student'
  }
})
</script>
