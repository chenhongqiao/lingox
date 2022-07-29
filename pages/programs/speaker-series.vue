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
                  v-model="formData.location"
                  :label="$t('form.location')"
                  hint="City/State, Country"
                  :rules="[
                    v => !!v || 'Location is required']"
                />
                <v-text-field
                  v-model="formData.pathway"
                  :label="$t('form.pathway')"
                  :rules="[
                    v => !!v || 'Pathway is required']"
                />
                <v-text-field
                  v-model="formData.question"
                  :label="$t('form.question')"
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
  form:
    name: "Full Name*"
    email: "Email*"
    location: "Location*"
    pathway: "Intended Pathway/Major*"
    question: "Any question for our speakers?"

zh:
  programParagraph:
    - "你想了解关于大学专业选择和未来职业发展吗？LingoX每月定期邀请来自世界排名前20大学的优秀学生，与我们分享他们申请大学选择专业的经历和经验以及他们对所选专业未来发展前景和趋势的分析和看法。他们分别来自哈佛大学、斯坦福大学、宾夕法尼亚大学、约翰霍普金斯大学、康奈尔大学、加州大学洛杉矶分校、加州大学伯克利分校，以及牛津大学，剑桥大学… 涉及的专业包括公商管理，金融，经济学，医学、计算机科学和国际关系等。"
    - "我们的嘉宾讲座可以帮助你更多了解英美大学的申请过程，如何制定大学选校名单，加入研究性实习，申请入职等等。"
    - "如需深入了解和订阅，请填写右侧问卷完成注册!"
  form:
    name: "姓名*"
    email: "邮箱*"
    location: "地区*"
    pathway: "意向职业方向/专业*"
    question: "您有没有想问演讲者的任何问题？"
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
