<template>
  <div>
    <v-container class="py-4 py-lg-8">
      <v-responsive max-width="1200" class="mx-auto text-center">
        <h2 class="text-h3">
          Featured Volunteers
        </h2>
        <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
      </v-responsive>

      <Roster :team="others" />
    </v-container>
    <v-container class="py-4 py-lg-8">
      <v-responsive max-width="1200" class="mx-auto text-center">
        <h2 class="text-h3">
          Graphic Design Team
        </h2>
        <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
      </v-responsive>

      <Roster :team="graphics" />
    </v-container>
  </div>
</template>
<i18n lang="yaml">
en:
  bio:
    lauryn: "Lauryn is a freshman from Northwood High School. Through her experience as an active Girl Scout and former kid reporter for TIME for Kids, she has learned that communication and collaboration are essential to overcoming challenges in all aspects of life. Lauryn hopes to empower students of all backgrounds by ensuring quality education and equal opportunity through LingoX. When she’s older, she plans on continuing to  help those in underserved communities as a public health major. In her spare time, she enjoys taking ballet classes, playing clarinet and piano, and participating in MUN conferences."
    sarea: "Growing up speaking multiple languages, Sarea is passionate about language-learning and communication. She recognizes the influence that language has on connecting people as a community. Through LingoX, she hopes to promote equality through language education, combining her skills in graphic design with her passion for languages. In her free time, Sarea enjoys journaling and dancing, and you will often find her watching movies of different cultures as well!"
    chloe: "Experiencing life in both Korea and America, Chloe has been able to showcase both cultures in her everyday life and hopes to help others do the same! She emphasizes the importance of education for students all around the world and seeks to provide new opportunities for them. With lots of experience in teaching languages, Chloe has gained skills in communication, collaboration, and leadership. Through LingoX, she implements her passion for art into her love for language!"
    joyce: "Joyce Wang currently attends high school in Florida. She moved to the U.S. from China at the age of 13. From barely understanding English to becoming fully fluent, she used merely 3 years. Therefore, she has plenty of English learning experience and is adept at teaching the language to beginners, as well. She has great enthusiasm for helping others and also runs a nonprofit organization dedicated to animal protection. Joyce’s dream is to make as positive an impact as possible on society and the world."
</i18n>
<script>
export default {
  name: 'BoardPage',
  data () {
    return {
      graphics: [
        {
          name: 'Lauryn Chew',
          bio: 'bio.lauryn',
          image: '/images/team/graphics/lauryn.jpg'
        }, {
          name: 'Sarea Leung',
          bio: 'bio.sarea',
          image: '/images/team/graphics/sarea.jpg'
        }, {
          name: 'Chloe Park',
          bio: 'bio.chloe',
          image: '/images/team/graphics/chloe.jpg'
        }
      ],
      others: [
        {
          name: 'Joyce Wang',
          bio: 'bio.joyce',
          image: '/images/team/others/joyce.png'
        }
      ]
    }
  },
  head: {
    title: 'Executive Board'
  }
}
</script>
