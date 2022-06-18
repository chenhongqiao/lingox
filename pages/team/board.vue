<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3">
        Executive Board
      </h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>

    <Roster :team="team" />
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
import { Member } from '~/components/Roster.vue'
export default defineComponent({
  name: 'BoardPage',
  setup () {
    const team: Ref<Member[]> = ref([
      {
        name: 'Mia Lee',
        position: 'Founder + CEO',
        bio: 'Mia is greatly passionate about education and strives to make learning resources more accessible for all. She founded LingoX with the goal construct an inclusive, welcoming environment for all students to pursue their passion, background notwithstanding. In her free time, Mia enjoys playing the piano, creative writing, and traveling to new places. She is always happy to make new friends and answer any questions you may have about LingoX!',
        image: require('@/assets/images/team/mial.jpg')
      },
      {
        name: 'David Chen',
        position: 'Chief Marketing Officer',
        bio: 'David is currently a senior at University High School in Irvine, California. Being involved in different activities such as MUN and FBLA, he has learned about the importance of both communication and the importance of trying to help out one\'s community. At LingoX, he hopes to achieve this goal by making English a more accessible language to those who may not have the opportunities. Outside of school, David enjoys playing golf and listening to music.',
        image: require('@/assets/images/team/david.jpg')
      }, {
        name: 'Hannah Choi',
        position: 'Assistant Marketing Officer',
        bio: 'Coming from a multicultural background, Hannah values learning about different cultures and languages. Through LingoX, she hopes that she will be able to encourage and empower other students to also be passionate about their culture. During her free time, Hannah enjoys drawing, going to the beach, and playing the piano.',
        image: require('@/assets/images/team/hannah.png')
      },
      {
        name: 'Jane Wang',
        position: 'Assistant Marketing Officer',
        bio: 'As a first-generation immigrant with parents in the education industry, Jane Wang recognizes the importance of English education for youth in underserved communities. It is essential for those to communicate and connect with people they could not understand before,  and therefore understand the world in a more enormous scope. Jane hopes to utilize her previous experience in advertising and marketing to reach a larger international audience, especially young women wanting to pursue higher education.. Outside of her academics, Jane enjoys pursuing visual arts and designing escape rooms.',
        image: require('@/assets/images/team/jane.png')
      },
      {
        name: 'Mia Hennequin',
        position: 'Chief Development Officer',
        bio: 'Mia Hennequin is a rising senior at Northwood Highschool. Being raised by a first generation parent education is a vital part for the success of youth everywhere. Through her contributions to LingoX she hopes to help spread access to education around the world. Mia is looking forward to being able to utilize her experiences in other organizations to help LingoX encourage students to follow their passions. During her free time Mia loves to go on hikes, explore outside, and hang out with her friends making new experiences.',
        image: require('@/assets/images/team/miah.png')
      }, {
        name: 'Shivali Shrivastava',
        position: 'Assistant Development Officer',
        bio: 'Shivali Shrivastava is a rising sophomore at Northwood High School. Being raised as a first generation immigrant with Indian parents she has been exposed to many valuable languages. She plans to use LingoX as a bridge to connect the impoverished communities with quality education. During her free time, Shivali enjoys taking walks on the beach or making memories with her friends.',
        image: require('@/assets/images/team/shivali.png')
      }, {
        name: 'Sarah Xie',
        position: 'Assistant Development Officer',
        bio: 'As a Chinese-American student who studied in multiple countries, Sarah Xie deeply comprehends how English serves as a vital tool in every educational aspect. She wishes to help youngsters in underserved communities get the chance to achieve their dreams through LingoX. In her free time, Sarah enjoys playing tennis, painting as well as traveling. ',
        image: require('@/assets/images/team/sarah.png')
      }, {
        name: 'Sanjana Ramakrishnan',
        position: 'Chief Financial Officer',
        bio: 'Sanjana is a rising senior at Northwood high school in Irvine, California. Being a first generation immigrant and her Indian heritage has exposed her to a multitude of different languages and how valuable language and words can be. Being able to speak 4 languages has opened her eyes to the beauty each language possesses and she hopes she can share her love of languages with others through LingoX. Aside from education, Sanjana is an avid badminton player and is really passionate about mental health awareness. ',
        image: require('@/assets/images/team/sanjana.jpg')
      }, {
        name: 'Jia An',
        position: 'Assistant Financial Officer',
        bio: 'Jia is a rising junior at Irvine\'s Northwood High School. As a Korean immigrant, her own very personal ties to education and language have spurred her passion for education and motivated her to join this program. She wishes to share her enthusiasm for Lingo X with others and contribute to the objective of spreading knowledge and the beauty of education elsewhere. Jia enjoys golf and reading outside of school.',
        image: require('@/assets/images/team/jia.png')
      }, {
        name: 'Harry Chen',
        position: 'Chief Technology Officer',
        bio: 'Harry is a rising junior at Northwood High School. Growing up in China and spending his first seven years of K-12 education in a non-English environment, Harry recognizes that for all English learners to unleash their full potential, creating an inclusive community with equitable access to quality education is essential. Having been exploring computer science for many years, Harry hopes to connect people in different regions around the world with the help of technology and pursue the goals of LingoX. Harry also plays tennis and likes to code while cooking.',
        image: require('@/assets/images/team/harry.png')
      }, {
        name: 'Tyler Truong',
        position: 'Assistant Technology Officer',
        bio: 'Tyler, being the older of two siblings, finds tremendous value in the power of education as a means to open up doors of possibility and reshape the world. As a part of LingoX, he hopes to make English education accessible to ALL. Aside from his passion for education, Tyler’s identity stands as a student at Northwood High School, volleyball player, and photographer, who would not hesitate to hang out and meet new friends whenever the opportunity arises.',
        image: require('@/assets/images/team/tyler.png')
      }, {
        name: 'Simone Rothaupt',
        position: 'Chief Public Relations Officer',
        bio: 'Simone Rothaupt is a rising senior at Rancho Solano Preparatory School in Phoenix, Arizona. She intends on majoring in economics and public policy in college. Through LingoX, she aims to assist in its global endeavor to improve language education. Her outside interests include long-distance running and creative writing.',
        image: require('@/assets/images/team/simone.png')
      }, {
        name: 'Abby Warnock',
        position: 'Assistant Public Relations Officer',
        bio: 'As an incipient junior at Northwood High School in Southern California, Abby Warnock is looking forward to encouraging all students to pursue their interests regardless of their situation. She believes that there is a plethora of information to learn from one another, which is why she hopes that working with LingoX will help others understand that everyone deserves a chance to learn about topics they are passionate about. When not involved in academics, Abby enjoys making new friends and developing her skills in visual arts.',
        image: require('@/assets/images/team/abby.png')
      }
    ])

    return { team }
  }
})
</script>
