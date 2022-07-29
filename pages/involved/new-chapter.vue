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
                  v-model="formData.occupation"
                  :label="$t('form.occupation')"
                  :rules="[
                    v => !!v || 'Occupation is required']"
                />
                <v-text-field
                  v-model="formData.school"
                  :label="$t('form.school')"
                />
                <v-text-field
                  v-model="formData.parentOccupation"
                  :label="$t('form.parentOccupation')"
                />
                <v-text-field
                  v-model="formData.reason"
                  :label="$t('form.reason')"
                  :rules="[
                    v => !!v || 'This field is required']"
                />
                <v-text-field
                  v-model="formData.plan"
                  :label="$t('form.plan')"
                  hint="events, community service, fundraisers, etc.*"
                  :rules="[
                    v => !!v || 'Plans are required']"
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
    - "Although founded in California, LingoX is proud to be represented by many chapters all over the world: from Toronto, Canada to Auckland, New Zealand! We are always looking for passionate minds to carry forth our mission and expand our operations to more communities. Now, you have the opportunity to start your own chapter!"
    - "You may also submit your resume to contact@lingox.org, with “Your Name - Start a Chapter” in the subject line."
  form:
    name: "Name*"
    email: "Email*"
    location: "Location*"
    occupation: "Occupation*"
    school: "School (if student)"
    parentOccupation: "Parents' Occupation (if under 20)"
    reason: "Why do you wish to start a LingoX chapter?*"
    plan: "How do you plan on serving your community’s needs?*"
    timeCommitment: "Time Commitment*"
    comments: "Any additional comments?"
zh:
  programParagraph:
    - "LingoX成立于美国加利福尼亚州，目前我们已经在全球多个国家和地区设立了分部：加拿大（多伦多），新西兰（奥克兰），英国（伦敦），中国（深圳、重庆）以及更多其它地区！我们一直在寻找对语言教育充满激情和热爱的志愿者来加入我们，并将我们的服务拓展到更多的地区。现在，欢迎你加入我们并建立新的LingoX分部！"
  form:
    name: "姓名*"
    email: "邮箱*"
    location: "地区*"
    occupation: "职业*"
    school: "学校（如果你是学生）"
    parentOccupation: "父母的职业（如果您是未成年人）"
    reason: "您想要建立LingoX的分部的动力？*"
    plan: "您服务社区的计划*"
    timeCommitment: "您可以为我们付出多少时间*"
    comments: "任何补充信息?"
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
        await $axios.$post('https://form-submission.harrychen.workers.dev/CPuMfhpdWCDJGuOe', formData.value)
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
