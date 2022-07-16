<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h3 class="text-h3">
        International Chapters
      </h3>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>
    <div v-for="(chapter,index) in chapters" :key="index">
      <h4 class="text-h4 mt-4">
        {{ chapter.name }}
      </h4>
      <Roster :team="chapter.members" />
    </div>
  </v-container>
</template>
<i18n lang="yaml">
en:
  bio:
    christina: "Christina Chen is a senior two student in Chongqing No.1 international high school. Although she has not systematically studied media now (but will apply and study media major in the future), she is very interested in media and wants to transmit and obtain information to the outside world through the Internet. Christina enjoys dancing, singing and listening to music in her daily life."
    anastasia: "Anastasia Mo (Anastasia Lorente), senior high student of Chongqing Nankai International Study Center, 15 years old. She is a crazy music lover with an artistic soul, also a huge fan of painting and dancing. But she chooses abnormal psychology as her major and dreams to be an criminal psychologist. Psychology, art, and environmental protection fulfill her life."
    ethan: "Ethan Chen is a student who has just finished the high school entrance examination and graduated from Chongqing No. 1 Middle School. He has no formal international education, but he is very interested in finance and economics. Also he is very willing to participate in public welfare activities. In his spare time, he is fond of playing basketball. He is also the person who particularly good at percussion."
    daisy: "Daisy Wang is a senior 2 student in Chongqing no.1 international high school. She is learning calculus, statistics, physics, economics and many other subjects. She is interested in everything and is looking forward to her future major（maybe law or biochemistry). Daisy enjoys listening to Kpop and watching SF."
    maggie: "Maggie Liu is a rising Sophomore at LSE majoring in sociology. She is particularly interested in investigating social problems e.g. social inequality through a multi-dimensional approach, excited about how perspectives from different fields within social science interact with each other to unveil the complexity of social issues. She loves sophisticated theories, but she enjoys detailed life experiences more. While keeping a keen interest in what is going on within and beyond Chinese society, she also loves hanging out with friends, making connections with different people, playing and making music, particularly of an impressionist style, of her own, and she is an experienced dancer in Chinese folk dance e.g. Dai dance for over ten years."
    lynn: "Lynn recently graduated from Chongqing Yucai Middle school. She is glad to serve as the Chongqing Chapter’s Director of Human Resources. She is a hospitable, kind and enthusiastic person, making her capable of smoothly communicating with anyone. In addition, she took part in many English speech contests, coming 21st in the English News speech competition and 2nd in the China Daily event. In her daily life, she loves dancing, exercising and taking photos, these hobbies encourage Lynn to enjoy life to its full extent."
    vicky: "Vicky Zheng is a student of Shenzhen College of International Education who is starting A1 in August. Her main academic interests lay in emotive education and language cognitive education. She is not only a theorist but also a pragmatist who puts the education theories she learnt into practice in classes. She likes listening to K-pop music and dance for leisure."
    gary: "Participating in voluntary teaching programs in Sri Lanka, Cambodia, and Shenzhen, China, Gary recognizes how the ability to speak and utilize English may change the life of the impoverished. Gary will be studying sociology at London School of Economics and Political Science. He loves to explore the differences among different cultures and discuss about the world’s issues with others. In his free time, Gary enjoys reading, watching movies, travelling, and, perhaps strangely, strolling around the city to observe people and to ponder about life."
    derek: "Derek is LingoX’s Shenzhen Chapter Director of Development. He is the class leader and a member of the school football team. Confidence, tenacity and humor are his major  characteristics. His cheerful personality enables him to establish a harmonious relationship with others. Derek believes that a sweet smile can always melt all the ice and snow. His motto is as follows: “I don't want to wonder if there will be cold wind and rain in the future. Since the target is the great mountain, it can only be left to those with serious and solid footprints. I don't want to think about whether the future is flat or muddy. As long as my heart is full of persistence and love, everything will turn out just fine!”"
    kristine: "Kristine is a double major, scholarship student who is currently in Berklee College of Music on both Film Scoring and Contemporary Writing and Production(CWP, undeclared). She has played the piano over ten years and has both the highest Grade Examination certifications which are approved by (CMA) Chinese Musicians’ Association and ABRSM (Associated Board of the Royal Schools of Music).  Moreover, she started learning composition by herself since she was in high school and currently has some scoring work with University student director. For Kristine’s study experience, she grew up in Chongqing, China then went to Auckland, New Zealand for the senior high school education for four years and currently focuses on music in Boston, US, which leads her to feel comfortable with both Mandarin and English."
</i18n>
<script lang="ts">
import { defineComponent, ref, Ref, useContext } from '@nuxtjs/composition-api'
import { Member } from '@/components/Roster.vue'
interface Chapter {
  name: string,
  members: Member[]
}
export default defineComponent({
  name: 'ChapterPage',
  setup () {
    const { $img } = useContext()
    const chapters: Ref<Chapter[]> = ref([
      {
        name: 'Southwest China',
        members: [{
          name: 'Christina Chen',
          position: 'Director of Development',
          bio: 'bio.christina',
          image: $img('team/christina.png')
        },
        {
          name: 'Lynn Zhang',
          position: 'Director of Human Resouces',
          bio: 'bio.lynn',
          image: $img('team/lynn.jpg')
        },
        {
          name: 'Anastasia Mo',
          bio: 'bio.anastasia',
          image: $img('team/anastasia.png')
        },
        {
          name: 'Ethan Chen',
          bio: 'bio.ethan',
          image: $img('team/ethan.png')
        },
        {
          name: 'Daisy Wang',
          bio: 'bio.daisy',
          image: $img('team/daisy.png')
        }]
      },
      {
        name: 'South China',
        members: [{
          name: 'Maggie Liu',
          position: 'Regional Director of Development',
          bio: 'bio.maggie',
          image: $img('team/maggie.png')
        }, {
          name: 'Derek Zhang',
          position: 'Director of Development',
          bio: 'bio.derek',
          image: $img('team/derek.jpg')
        },
        {
          name: 'Vicky Zheng',
          position: 'Director of Human Resources',
          bio: 'bio.vicky',
          image: $img('team/vicky.jpg')
        },
        {
          name: 'Gary Yukun',
          position: 'Director of Marketing',
          bio: 'bio.gary',
          image: $img('team/gary.png')
        }
        ]
      },
      {
        name: 'New Zealand',
        members: [
          {
            name: 'Kristine Peng',
            position: 'Director of Development',
            bio: 'bio.kristine',
            image: $img('team/kristine.jpg')
          }
        ]
      },
      {
        name: 'Canada',
        members: [
          {
            name: 'Eugenio Ciarlandini'
          },
          {
            name: 'Jerry Jia'
          },
          {
            name: 'Roy Feng'
          },
          {
            name: 'Noah Stein'
          },
          {
            name: 'Oliver Wong'
          },
          {
            name: 'Botond Horvath'
          },
          {
            name: 'Khushi Sharma'
          }
        ]
      },
      {
        name: 'UK',
        members: [
          {
            name: 'Alvin Chen',
            position: 'Director of Development'
          }
        ]
      }
    ])

    return { chapters }
  },
  head: {
    title: 'International Chapters'
  }
})
</script>
