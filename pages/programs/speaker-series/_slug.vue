<template>
  <div class="py-4 py-lg-8">
    <v-container>
      <div class="text-h4">
        {{ content.title }}
      </div>
    </v-container>
    <v-container>
      <youtube :video-id="content.videoId" fit-parent />
      <nuxt-content class="mt-4" :document="content" />
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, error, $content }) {
    const content = (await $content('videos').where({ slug: params.slug }).fetch())[0]
    if (!content) {
      error({ statusCode: 404, message: '404 Not Found' })
    } else {
      return { content }
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
