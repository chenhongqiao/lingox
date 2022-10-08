<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('becomeCurriculumDeveloper') }}
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
                  v-model="formData.language"
                  :label="$t('form.language')"
                  hint="Which languages are you fluent in?"
                  :rules="[
                    v => !!v || 'Languages are required']"
                />
                <v-text-field
                  v-model="formData.proficiency"
                  :label="$t('form.proficiency')"
                  hint="Describe your level of proficiency."
                  :rules="[
                    v => !!v || 'Proficiency is required']"
                />
                <v-text-field
                  v-model="formData.experience"
                  :label="$t('form.experience')"
                  hint="Discuss any previous experience with teaching (especially in languages)."
                  :rules="[
                    v => !!v || 'Experience is required']"
                />
                <v-text-field
                  v-model="formData.subject"
                  :label="$t('form.subject')"
                  hint="What subjects are you passionate about? (STEM, humanities, etc.)"
                  :rules="[
                    v => !!v || 'Subjects are required']"
                />
                <v-text-field
                  v-model="formData.timeCommitment"
                  :label="$t('form.timeCommitment')"
                  hint="How much time are you able to commit to LingoX per week?"
                  :rules="[
                    v => !!v || 'Time Commitment is required']"
                />
                <v-text-field
                  v-model="formData.comments"
                  :label="$t('form.comments')"
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
    - "A major component of LingoX’s mission to convey accessible language education to communities in need is the provision of free lessons. These can be both live and asynchronous in format. In order to service as many people as possible, we are constantly working hard to create new language curriculums. If you’re passionate about teaching, communication, and international collaboration, sign up today to become a LingoX curriculum developer! Upon request, volunteer hours may be awarded."
  form:
    name: "Full Name*"
    email: "Email*"
    cityState: "City/State*"
    country: "Country*"
    language: "Languages*"
    proficiency: "Proficiency*"
    experience: "Teaching Experience*"
    subject: "Subjects*"
    timeCommitment: "Time Commitment*"
    comments: "Any additional comments?"
zh:
  programParagraph:
    - "LingoX的使命是为有需要帮助的社区和个人提供免费的语言教育。因此，我们最主要的工作是为他们提供免费课程。它们可以是实时的，也可以是录播，阅读材料，和其它形式。为了尽可能帮助更多的人，我们不断努力设计，编写并完善我们的语言课程。如果你热衷于教学、交流和国际合作，请立即注册成为LingoX的课程开发者！如有需要，我们也可授予您志愿者时间。"
  form:
    name: "姓名*"
    email: "邮箱*"
    cityState: "城市*"
    country: "国家*"
    language: "想要参与编写的语言*"
    proficiency: "对该语言的流利程度*"
    experience: "教学经验*"
    subject: "有经验的科目*"
    timeCommitment: "您可以付出多少时间*"
    comments: "任何补充信息?"
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
      language: '',
      proficiency: '',
      experience: '',
      subject: '',
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
        await $axios.$post('https://form-submission.harrychen.workers.dev/VKaslvLgUOSutcvm', formData.value)
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
