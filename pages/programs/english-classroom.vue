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
                  v-model="formData.firstName"
                  :label="$t('form.firstName')"
                  :rules="[
                    v => !!v || 'First Name is required']"
                />
                <v-text-field
                  v-model="formData.lastName"
                  :label="$t('form.lastName')"
                  :rules="[
                    v => !!v || 'Last Name is required']"
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
                  hint="City/State"
                  :rules="[
                    v => !!v || 'City/State is required']"
                />
                <v-text-field
                  v-model="formData.country"
                  :label="$t('form.country')"
                  hint="Country"
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
                  v-model="formData.occupation"
                  :label="$t('form.occupation')"
                  :rules="[
                    v => !!v || 'Occupation is required']"
                />
                <v-text-field
                  v-model="formData.needs"
                  :label="$t('form.needs')"
                  :hint="$t('form.needsHint')"
                  :rules="[
                    v => !!v || 'School Needs is required']"
                />
                <v-text-field
                  v-model="formData.distribution"
                  :label="$t('form.distribution')"
                  :hint="$t('form.distributionHint')"
                  :rules="[
                    v => !!v || 'Distribution is required']"
                />
                <v-text-field
                  v-model="formData.verification"
                  :label="$t('form.verification')"
                  :hint="$t('form.verificationHint')"
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
  form:
    firstName: "First Name*"
    lastName: "Last Name*"
    email: "Email*"
    cityState: "City/State*"
    country: "Country*"
    school: "School*"
    occupation: "Occupation*"
    needs: "Needs*"
    needsHint: "Please describe your school’s needs (financially, in particular)"
    distribution: "Material Distribution*"
    distributionHint: "How would you be able to distribute these materials?"
    verification: "Verification*"
    verificationHint: "Please type “Yes” to verify that you will make these resources available to all students at your school."
zh:
  programParagraph:
    - "你想提高你的英语技能吗？欢迎申请LingoX“英语课堂”项目. 此项目旨在为偏远山区学校和贫困学生提供免费的英语教学。LingoX的课程开发团队针对中国学生量身定制了简单易懂，实用性极强的专属课程。"
    - "“英语教室”的课程围绕 “日常英语” 和 “自然拼读” 展开。这两部分内容是实现学生流利说英语的必要环节-- 前者强调对话式口语，而后者则围绕着朗读和发音。"
    - "课堂上学生将与英语为母语的教学导师互动和对话，学习正确的发音和语法。与其他英语教学项目不同的是，“英语课室”并不是将公式化的枯燥课程强行灌输给学生，而是让学生灵活选择符合个人需要的全免费课程。"
    - "你还在等什么呢？今天就开始申请吧，体验“英语课堂”所提供的一切！"
  form:
    firstName: "名*"
    lastName: "姓*"
    email: "邮箱*"
    cityState: "城市*"
    country: "国家*"
    school: "学校*"
    grade: "年级*"
    occupation: "校内职务*"
    needs: "学校需求*"
    needsHint: "请描述一下您学校的需求（尤其是财务方面）"
    distribution: "材料分发*"
    distributionHint: "您将如何分发获得到的材料？"
    verification: "证明"
    verificationHint: "请在输入“Yes”以保证您会让贵校所有的学生都有使用材料的权利。"
</i18n>
<script lang="ts">
export default defineComponent({
  name: 'EnglishClassroom',
  setup () {
    const { $axios } = useNuxtApp()
    const formData = ref({
      firstName: '',
      lastName: '',
      email: '',
      cityState: '',
      country: '',
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
        await $axios.$post('https://form-submission.harrychen.workers.dev/vwnRCzydUaCPbqrP', formData.value)
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
