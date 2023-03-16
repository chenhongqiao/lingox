<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h3 class="text-h3">
        {{ $t('educationalConsultants') }}
      </h3>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>
    <v-row>
      <v-col v-for="person in consultants" :key="person.name" cols="6" md="3">
        <v-card :to="'/team/consultants/'+person.slug">
          <v-img height="300" :src="person.image" />
          <v-card-title>
            {{ person.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ $t(person.position) }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<i18n lang="yaml">
en:
  stanford: Stanford University
  havard: Havard University
  upenn: University of Pennsylvania
  jhuAndOthers: JHU BS | Harvard MBE | Brown MD
  berkeley: UC Berkeley
  cornell: Cornell University
  ucla: UCLA
  umich: University of Michigan
zh:
  stanford: 斯坦福大学
  havard: 哈佛大学
  upenn: 宾夕法尼亚大学
  jhuAndOthers: 约翰霍普金斯本科 | 哈佛生物工程硕士 | 布朗医学博士
  berkeley: UC Berkeley
  cornell: Cornell University
  ucla: UCLA
  umich: University of Michigan
</i18n>
<script>
export default {
  name: 'ConsultantsPage',
  data () {
    return {
      consultants: [
        {
          name: 'Eric Gao',
          position: 'stanford',
          bio: 'bio.eric',
          image: '/images/team/consultants/eric.jpg',
          slug: 'eric'
        },
        {
          name: 'Joseph Hwang',
          position: 'havard',
          bio: 'bio.joseph',
          image: '/images/team/consultants/joseph.jpg',
          slug: 'joseph'
        }, {
          name: 'Yuhua Chen',
          position: 'upenn',
          bio: 'bio.yuhua',
          image: '/images/team/consultants/yuhua.jpg',
          slug: 'yuhua'
        }, {
          name: 'William Choi',
          position: 'jhuAndOthers',
          bio: 'bio.william',
          image: '/images/team/consultants/william.jpg',
          slug: 'william'
        }, {
          name: 'Audrey Pe',
          position: 'stanford',
          bio: 'bio.audrey',
          image: '/images/team/consultants/audrey.jpg',
          slug: 'audrey'
        },
        {
          name: 'Rey Shankar',
          position: 'berkeley',
          bio: 'bio.rey',
          image: '/images/team/consultants/rey.jpg',
          slug: 'rey'
        }, {
          name: 'Anjali Anbu',
          bio: 'bio.anjali',
          position: 'cornell',
          image: '/images/team/consultants/anjali.jpg',
          slug: 'anjali'
        },
        {
          name: 'Alex Fu',
          bio: 'bio.alex',
          position: 'ucla',
          image: '/images/team/consultants/alex.jpg',
          slug: 'alex'
        },
        {
          name: 'Benjamin Moy',
          bio: 'bio.benjamin',
          position: 'umich',
          image: '/images/team/consultants/benjamin.jpg',
          slug: 'benjamin'
        }
      ]
    }
  },
  head: {
    title: 'Educational Consultants'
  }
}
</script>
