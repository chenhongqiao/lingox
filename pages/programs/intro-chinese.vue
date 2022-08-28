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
          <div v-if="$t('notice')" class="mb-2">
            <b>{{ $t('notice') }}</b>
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
              <v-form ref="form" v-model="valid" disabled>
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
                  v-model="formData.location"
                  :label="$t('form.location')"
                  hint="City/State, Country"
                  :rules="[
                    v => !!v || 'Location is required']"
                />
                <v-text-field
                  v-model="formData.school"
                  :label="$t('form.school')"
                  :rules="[
                    v => !!v || 'School is required']"
                />
                <v-text-field
                  v-model="formData.grade"
                  :label="$t('form.grade')"
                  :rules="[
                    v => !!v || 'Grade Level is required']"
                />
                <v-text-field
                  v-model="formData.proficiency"
                  :label="$t('form.proficiency')"
                  hint="Describe your level of proficiency in Chinese"
                  :rules="[
                    v => !!v || 'Proficiency Level is required']"
                />
                <v-text-field
                  v-model="formData.timeZone"
                  :label="$t('form.timeZone')"
                  :rules="[
                    v => !!v || 'Time Zone is required']"
                />
                <v-text-field
                  v-model="formData.income"
                  :label="$t('form.income')"
                  hint="Please state your approximate annual household income per year (for the purpose of determining eligibility)"
                  :rules="[
                    v => !!v || 'Income is required']"
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
  notice: "Registration form is currently closed as we have reached this cycle’s capacity. Please check back in November to sign up for the second series of lessons! Acceptance emails have been sent to those who applied for our upcoming Introduction to Chinese program. If you registered, please check your inbox and your spam folder too!"
  programParagraph:
    - "Interested in learning Chinese, but find yourself lacking the resources to get started? LingoX is offering a FREE introductory program open to students with demonstrated need! Classes will be live, taking place on Zoom every week. Our curriculum places a heavy emphasis on “speakable” Chinese and aims to have you talking in Mandarin by the end of our time together. With the help of our skilled and attentive teachers, students will find themselves greatly enjoying their educational experience."
    - "LingoX strives to aid students from underserved communities, who may normally lack such support. We hope that these interactive, accessible Chinese lessons will motivate students to learn a new language and be inspired to connect with others. These lessons will be supplemented by exciting practice in conversational skills, as well as witnessing the language in various forms of entertainment media. By curriculum design, students should be able to engage in conversation in the first session!"
    - "Our course’s live format allows for students to ask questions and have them answered immediately, whilst also receiving ongoing support. Furthermore, our standby Tech Team is prepared to troubleshoot connectivity and software issues. We will also have after-class practice for participants to review and work on, in order to solidify the new knowledge."
    - "It is our firm belief that all those interested in learning Chinese should be granted the means to do so. Ready to study the most spoken language in the world? Sign up now, while limited spots last! No prior background in Chinese is required."
    - "Note: As part of its commitment to serving impoverished students, LingoX may prioritize certain applicants based on their circumstances."
  longIntroChinese: "Shoujen Scholars Program"
  form:
    firstName: "First Name*"
    lastName : "Last Name*"
    email: "Email*"
    location: "Location*"
    school: "School*"
    grade: "Grade Level*"
    proficiency: "Proficiency*"
    timeZone: "Time Zone*"
    income: "Household Income*"
    comments: "Additional Comments"
zh:
  notice: "注册已结束。谢谢！"
  programParagraph:
    - "LingoX 为全球需要学习汉语的学生提供免费的汉语入门课程！每周定时将在Zoom上现场直播教学。我们的课程重点教授“用得上，说得了”的实用汉语，帮助我们的学生快速掌握运用汉语进行日常交流。"
    - "LingoX努力帮助来自教育资源匮乏的社区的学生，为他们提供汉语学习的支持。我们希望这些简单易懂的汉语课程将激励学生学习一种新的语言，并鼓励他们与他人交流。根据课程设计，学生很可能在第一节课上就能参与对话。"
    - "我们的直播授课形式允许学生提出问题并立即得到解答，同时还能得到长期的课后铺导。此外，我们的技术团队随时准备好解决网络连接和软件的问题。我们还将提供课后练习，供学生复习和练习，以巩固新知识。"
    - "我们希望帮助所有对学习汉语感兴趣的人获得学习汉语的机会。帮助他们学习和了解这门世界上使用人数最多的语言。"
    - "温馨提示：本着优先服务经济困难学生的原则，LingoX会根据申请人的家庭收入水平和经济状况来考虑是否录取。"
  longIntroChinese: 汉语教室
  form:
    firstName: "名*"
    lastName: "姓*"
    email: "邮箱*"
    location: "地区*"
    school: "学校*"
    grade: "年级*"
    proficiency: "中文能力*"
    timeZone: "时区*"
    income: "家庭收入*"
    comments: "额外补充信息"
</i18n>
<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IntroChinese',
  setup () {
    const { $axios } = useContext()
    const formData = ref({
      firstName: '',
      lastName: '',
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
