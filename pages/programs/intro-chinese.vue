<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <h3 class="text-h3">
        {{ $t('longIntroChinese') }}
      </h3>
      <div class="text-uppercase font-weight-bold primary--text mt-4">
        {{ $t('programDetails') }}
      </div>
      <v-row class="mt-0 pt-0">
        <v-col cols="12" md="7">
          <div class="text-h6 mb-2">
            Cohort III | Dates: 10/29/23 - 1/14/24
          </div>
          <div v-if="$t('notice') !=='notice'" class="mb-2">
            <v-alert
              type="info"
              color="secondary"
            >
              {{ $t('notice') }}
            </v-alert>
          </div>
          <div v-if="$t('paragraph')!=='paragraph'">
            <div v-for="(text, index) in Object($t('paragraph'))" :key="index">
              <div class="text-body-1 mb-2">
                {{ text }}
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-img
            src="/images/intro-chinese.jpg"
            class="rounded-lg elevation-6 mb-2"
            max-height="480"
          />
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
                @click="done = false"
              >
                {{ $t('submitAnotherResponse') }}
              </v-btn>
            </v-card-text>
            <v-card-text v-else>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="formData.firstName"
                  :label="$t('form.firstName')"
                  :rules="[(v) => !!v || 'First Name is required']"
                />
                <v-text-field
                  v-model="formData.lastName"
                  :label="$t('form.lastName')"
                  :rules="[(v) => !!v || 'Last Name is required']"
                />
                <v-text-field
                  v-model="formData.email"
                  validate-on-blur
                  :label="$t('form.email')"
                  :rules="[
                    (v) => !!v || 'Email is required',
                    (v) =>
                      /.+@.+\..+/.test(v) || 'Please enter an valid E-mail',
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
                  :rules="[(v) => !!v || 'School is required']"
                />
                <v-text-field
                  v-model="formData.grade"
                  :label="$t('form.grade')"
                  :rules="[(v) => !!v || 'Grade Level is required']"
                />
                <v-text-field
                  v-model="formData.proficiency"
                  :label="$t('form.proficiency')"
                  hint="Describe your level of proficiency in Chinese"
                  :rules="[(v) => !!v || 'Proficiency Level is required']"
                />
                <v-text-field
                  v-model="formData.timeZone"
                  :label="$t('form.timeZone')"
                  :rules="[(v) => !!v || 'Time Zone is required']"
                />
                <v-text-field
                  v-model="formData.income"
                  :label="$t('form.income')"
                  hint="Please state your approximate annual household income per year (for the purpose of determining eligibility)"
                  :rules="[(v) => !!v || 'Income is required']"
                />
                <v-text-field
                  v-model="formData.learnAbout"
                  :label="$t('form.learnAbout')"
                  :rules="[(v) => !!v || 'How you learned about us is required']"
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
      <div class="text-uppercase text-h4 font-weight-bold primary--text mt-6 text-center">
        Our Reviews
      </div>
      <v-row class="mt-4">
        <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="12" md="6">
          <v-card height="100%" color="primary lighten-1">
            <v-card-title class="text-h5 font-weight-bold white--text mb-2">
              {{ testimonial.name }}
            </v-card-title>
            <v-card-subtitle class="text-subtitle-1 white--text">
              {{ testimonial.location }}
            </v-card-subtitle>
            <v-card-text class="white--text mb-2 text-body-1">
              {{ testimonial.quote }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="error" color="error">
      An error has occurred while submitting the form. Please try again.
    </v-snackbar>
  </div>
</template>
<i18n lang="yaml">
en:
  notice: "If you have signed up for this program, please consistently check your email (including the spam folder) for updates. All information will be sent to your inbox. You can also follow us @lingoxofficial on Instagram for important announcements."
  paragraph:
    - "The Shoujen Scholars Program is a transformative 11-week Mandarin language-learning initiative, entirely funded by LingoX, with the core mission of breaking down barriers and providing accessible Chinese education for individuals who are enthusiastic about learning but may encounter resource limitations."
    - "With a hybrid learning format (both synchronous and asynchronous), SSP offers an empowering solution for those eager to embrace the Mandarin language. Participants not only receive free online lessons and comprehensive course materials, including engaging video lessons and a dedicated course book, but they also benefit from unwavering support and guidance throughout their journey, including access to the thriving SSP Scholar Network."
    - "SSP is a remarkable opportunity to unlock the mysteries of Mandarin, forge meaningful cultural connections, and immerse oneself in the rich world of the Chinese language. At LingoX, we believe that all those interested in learning Chinese should be granted the means to do so. That's why SSP is fully funded, ensuring that cost is never a barrier to education."
    - "Our first few lessons are held virtually on Zoom for the purpose of allowing the cohort to familiarize themselves with each other and build community, while also providing opportunities for students to ask questions live. We understand that due to the busy nature of our scholars’ lives, not everyone can make the same time for online classes. So for our later lessons, we transition to an asynchronous format, allowing students to learn at their own pace."
    - "In addition to our engaging video lessons, we've introduced a complementary course book. This comprehensive resource provides a robust foundation for your language journey. "
  longIntroChinese: "Shoujen Scholars Program"
  form:
    firstName: "First Name*"
    lastName : "Last Name*"
    email: "Email*"
    cityState: "City/State*"
    country: "Country*"
    school: "School*"
    grade: "Grade Level*"
    proficiency: "Proficiency*"
    timeZone: "Time Zone*"
    income: "Household Income*"
    learnAbout: "How did you learn about this program?*"
    comments: "Additional Comments"
zh:
  notice: "注册后所有有关课程的信息和更新都会被发到注册时填写的邮箱（可能会被归为垃圾邮件）。您也可以关注我们的Instagram @lingoxofficial。"
  paragraph:
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
    cityState: "城市*"
    country: "国家*"
    school: "学校*"
    grade: "年级*"
    proficiency: "中文能力*"
    timeZone: "时区*"
    income: "家庭收入*"
    comments: "额外补充信息"
</i18n>
<script>
export default {
  name: 'IntroChinesePage',
  data () {
    return {
      formData: {
        name: '',
        email: '',
        cityState: '',
        country: '',
        occupation: '',
        school: '',
        parentOccupation: '',
        reason: '',
        plan: '',
        timeCommitment: '',
        learnAbout: '',
        comments: ''
      },
      valid: false,
      submitting: false,
      done: false,
      error: false,

      testimonials: [
        {
          name: 'Angelica',
          location: 'Mexico City, Mexico',
          quote: "I am grateful to Lingo for sharing this amazing course! As a worker and student, I don't have a lot of time to spend hours studying Chinese, but the structure of the class allows me to retain new information in short amounts of time. Thank you, Lingox! 非常感谢!"
        },
        {
          name: 'Deena',
          location: 'Karnataka, India',
          quote: 'Shoujen Scholars Program is really the best platform to learn Chinese. I am lucky to be a student of this program, especially with the amazing teaching methods. Thank you for this program!'
        },
        {
          name: 'Andrea',
          location: 'Los Angeles, United States',
          quote: 'This is my first approach to the Chinese language. I really appreciate the Shoujen Scholars Program, for your time and effort to make it possible for me to discover China from a more enjoyable perspective.'
        },
         {
          name: 'Roxann',
          location: 'Toronto, Canada',
          quote: 'I am so thankful to SSP, Mia, and the rest of the staffs! As a complete beginner of the language, you guys helped me learn Mandarin effectively and yet have fun at the same time! Xiè Xiè!'
        }
      ]
    }
  },
  head: {
    title: 'Shoujen Scholars Program'
  },
  methods: {
    async submit () {
      this.submitting = true
      try {
        await this.$axios.$post('https://form-submission.harrychen.workers.dev/wQKrboWxpYGrcgwc', this.formData)
        this.done = true
        this.$refs.form.reset()

        try {
          this.$gtm.push({ event: 'chinese-signup' })
        } catch (err) {
          console.error(err)
        }
      } catch (err) {
        this.error = true
      }
      this.submitting = false
    }
  }
}
</script>
