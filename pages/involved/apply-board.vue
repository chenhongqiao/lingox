<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      {{ $t('applyToBoard') }}
    </h3>
    <v-row class="mt-4">
      <v-col cols="12" md="7">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          {{ $t('getInvolved') }}
        </div>
        <div v-if="$t('notice')" class="mb-2 text-body-1">
          {{ $t('notice') }}
        </div>
        <!--div class="text-body-1 mb-3">
          {{ $t('programText') }}
        </div>
        <div v-for="(position,index) in positions" :key="index" class="mt-4 mb-3">
          <div class="text-h6">
            <b>{{ position.name }}</b>
          </div>
          <div class="text-h7 mt-1">
            <b>Responsibilities</b>
          </div>
          <ul>
            <li v-for="(responsibility,resindex) in position.responsibilities" :key="resindex" class="text-body-1">
              {{ responsibility }}
            </li>
          </ul>
          <div class="text-h7 mt-1">
            <b>Requirements</b>
          </div>
          <ul>
            <li v-for="(requirement,reqindex) in position.requirements" :key="reqindex" class="text-body-1">
              {{ requirement }}
            </li>
          </ul>
        </div>
        <div class="text-body-1 mb-3">
          {{ $t('resume') }}
        </div-->
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-1" flat>
          <v-card-title>{{ $t('applicationForm') }}</v-card-title>
          <v-card-text v-if="closed" class="text-center">
            <div class="mt-1">
              <v-icon size="60" color="warning">
                mdi-lock
              </v-icon>
            </div>
            <div class="mt-2">
              Form is currently closed. Thank you for your interest!
            </div>
          </v-card-text>
          <v-card-text v-else-if="done" class="text-center">
            <div class="mt-1">
              <v-icon size="60" color="success">
                mdi-check-circle
              </v-icon>
            </div>
            <div class="mt-2">
              Thank you for applying! You may also submit your resume to contact@lingox.org and include your full name and desired position in the subject line.
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
                v-model="formData.cityState"
                label="City/State*"
                :rules="[
                  v => !!v || 'City/State is required'
                ]"
              />
              <v-text-field
                v-model="formData.country"
                label="Country*"
                :rules="[
                  v => !!v || 'Country is required'
                ]"
              />
              <v-text-field
                v-model="formData.school"
                label="School*"
                :rules="[
                  v => !!v || 'School is required'
                ]"
              />
              <v-text-field
                v-model="formData.grade"
                label="Grade*"
                :rules="[
                  v => !!v || 'Grade is required'
                ]"
              />
              <v-text-field
                v-model="formData.position"
                label="Position*"
                hint="Which position are you applying to?"
                :rules="[
                  v => !!v || 'Position is required'
                ]"
              />
              <v-textarea
                v-model="formData.reasons"
                label="Reasons*"
                hint="Briefly explain why you are applying to LingoX’s Executive Board."
                :rules="[
                  v => !!v || 'Reasons is required'
                ]"
              />
              <v-textarea
                v-model="formData.qualifications"
                label="Qualifications*"
                hint="Describe the relevant qualifications you possess that set you apart as a candidate for the desired position. These may be both qualitative (personality characteristics) and quantitative (prior experience)."
                :rules="[
                  v => !!v || 'Qualifications are required'
                ]"
              />
              <v-text-field
                v-model="formData.language"
                label="Languages*"
                hint="Can you speak any other languages other than English? Are there any that you wish to learn?"
                :rules="[
                  v => !!v || 'Languages are required']"
              />
              <v-text-field
                v-model="formData.commitment"
                label="Time Commitment*"
                hint="How much time can you contribute to LingoX per week?"
                :rules="[
                  v => !!v || 'Time commitment is required']"
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
</template>
<i18n lang="yaml">
en:
  programText: "Positions for the 2022-2023 LingoX Executive Board are listed below!"
  notice: "The form is now closed as we have met this application cycle’s deadline. Please check back in April 2023 for information regarding next year’s Executive Board selection process. You can also check out our Instagram @lingoxofficial for all the newest updates. Thanks for your interest."
  resume: "You may also submit your resume to contact@lingox.org, with “Your Name - Executive Board Application (Desired Position)” in the subject line."
</i18n>
<script>
export default {
  name: 'ApplyBoardPage',
  data () {
    return {
      positions: [
        {
          name: 'ATO (Assistant Technology Officer)',
          responsibilities: [
            'Managing and updating LingoX’s website',
            'Working with the Tech Department to create new products, such as apps',
            'Editing footage for programs',
            'Attending weekly Executive Meetings'
          ],
          requirements: [
            'Hardworking and communicative',
            'Experience in web development and JavaScript UI framework (preferably with Vue)',
            'Experience with GitHub and Git'
          ]
        },
        {
          name: 'ADO (Assistant Development Officer)',
          responsibilities: [
            'Preparing project proposals',
            'Conducting outreach and expansion',
            'Research new opportunities (collaborations, sponsorships, promotions, etc.)',
            'Attending weekly Executive Meetings'
          ],
          requirements: [
            'Diligent and attentive',
            'Adept at research',
            'High-level professional writing skills'
          ]
        }
      ],
      formData: {
        name: '',
        email: '',
        cityState: '',
        country: '',
        school: '',
        grade: '',
        position: '',
        reasons: '',
        qualifications: '',
        languages: '',
        commitment: ''
      },
      valid: false,
      submitting: false,
      done: false,
      error: false,
      closed: true
    }
  },
  head: {
    title: 'Apply to Board'
  },
  methods: {
    async submit () {
      this.submitting = true
      try {
        await this.$axios.$post('https://form-submission.harrychen.workers.dev/wYERlUcXJqvAYqXk', this.formData)
        this.done = true
        this.$refs.form.reset()
      } catch (err) {
        this.error = true
      }
      this.submitting = false
    }
  }
}
</script>
