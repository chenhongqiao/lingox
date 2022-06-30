<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      {{ $t('becomeTutor') }}
    </h3>
    <v-row class="mt-4">
      <v-col cols="12" md="7">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          {{ $t('programDetails') }}
        </div>
        <div v-for="text in $t('programParagraph')">
          <div class="text-body-1 mb-2">
            {{ text }}
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-1" flat>
          <v-card-title>{{ $t('tutorSignup') }}</v-card-title>
          <v-card-text>
            <v-text-field label="Name" dense disabled />
            <v-text-field label="Email" dense disabled />
            <v-btn block color="primary" large disabled>
              {{ $t('comingSoon') }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<i18n lang="yaml">
en:
  programParagraph:
  - If you are a fluent speaker in either English, Chinese, or both, and are interested in providing education to others, join the LingoX tutoring team! We are looking for patient, responsive individuals who work well with others. Volunteers may be responsible for individual (one-on-one) lessons or group tutoring.
  - Tutors do not have to worry about building their content from scratch, because we will provide a curriculum and resources to support both you and your students! If requested, volunteer hours can be awarded. In addition, LingoX tutors may be expected to follow up with parents on lesson progress and student behavior.
  - Currently, our main offered languages are English and Chinese – but if you are fluent in other languages, be on the lookout for more opportunities coming soon!"
zh:
  programParagraph:
  - 如果你：能流利地说英语、汉语或两者兼并，有兴趣投身于语言教学；
  - 如果你：
  - 语气听上去：平等 ...
  - 表情看上去：亲切 ...
  - 在课堂上：轻松有趣 ...
  - 与学生交流：有共同话题 ...
  - 专业修养：知识广博，口才极好 ...
  - 布置作业：不要太多 ...
  - 理解、赏识学生…
  - 欢迎加入LingoX志愿者导师团队！
  - 你将负责一对一课程或小组辅导。我们将提供课程大纲和其它教学资源来支持你和你的学生！如你有需要，我们也可授予你志愿者小时数。此外，做为LingoX的导师，我们可能会要求你向家长汇报学生的课程进度以及课堂表现。
  - 目前，我们主要提供英语和汉语的教学，但如果你能流利地使用其他语言，也请与我们联系！
</i18n>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'NewTutorPage',
  head: {
    title: 'Become a Tutor'
  }
})
</script>
