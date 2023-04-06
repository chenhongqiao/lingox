<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      Language Learning
    </h3>
    <div class="mt-4 text-body-1">
      Do you have any questions regarding language learning? Whether it be about vocabulary usage, grammar rules, or even study method recommendations, leave us a message below!
    </div>
    <div class="mt-2 text-body-1">
      We have volunteers available 24/7 to provide support, but may need more time for responses during busy periods. Please only submit one question at a time!
    </div>
    <v-card class="pa-1 mt-4" flat>
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
          <v-row>
            <v-col cols="12" sm="3">
              <v-select
                v-model="formData.type"
                :items="['Content','Study tips','Resources', 'Other']"
                :label="$t('form.type')"
                :rules="[(v) => !!v || 'Question Type is required']"
              />
            </v-col>
            <v-col cols="12" sm="9">
              <v-text-field
                v-model="formData.subject"
                :label="$t('form.subject')"
                :rules="[(v) => !!v || 'Question Subject is required']"
              />
            </v-col>
          </v-row>
          <v-textarea
            v-model="formData.content"
            :label="$t('form.question')"
            :rules="[(v) => !!v || 'Question is required']"
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
  </v-container>
</template>
<i18n lang="yaml">
en:
  form:
    type: "Question Type*"
    subject: "Question Subject*"
    question: "Please enter your question here (please specify the language if it's language-specific)*"
    email: "Email*"
</i18n>

<script>
export default {
  name: 'LanguageLearningPage',
  data () {
    return {
      formData: {
        type: '',
        subject: '',
        content: '',
        email: ''
      },
      valid: false,
      submitting: false,
      done: false,
      error: false
    }
  },
  head: {
    title: 'Language Learning Resources'
  },
  methods: {
    async submit () {
      this.submitting = true
      try {
        await this.$axios.$post('https://form-submission.harrychen.workers.dev/GZUsBDtUxEuiKRPM', this.formData)
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
