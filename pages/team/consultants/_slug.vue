<template>
  <div class="py-4 py-lg-8">
    <v-container>
      <div class="text-h4">
        {{ content.name }}
      </div>
      <div>
        <nuxt-content class="mt-4" :document="content" />
      </div>
    </v-container>
    <v-container class="mt-n2 pt-0">
      <v-row>
        <v-col v-for="video in videos" :key="video.title" cols="4">
          <v-card :to="'/programs/speaker-series/'+video.slug">
            <v-img :src="video.thumbnail" />
            <v-card-subtitle>{{ video.title }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, error, $content }) {
    const content = (await $content('consultants').where({ slug: params.slug }).fetch())[0]
    const videos = await $content('videos').where({ speaker: content.name }).fetch()
    if (!content) {
      error({ statusCode: 404, message: '404 Not Found' })
    } else {
      return { content, videos }
    }
  },
  head () {
    return {
      title: this.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description || this.content.title
        }
      ]
    }
  }
}
</script>
