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
    eugenio: "Eugenio Ciarlandini is a current year 11 student at Upper Canada College, in Toronto, Ontario. His life has always revolved around the powers of his voice, from his passions for choral singing, justice, advocacy and diplomacy. He is an avid member of the Upper Canada College Model UN club, and has sung since his early years with St. Michael’s Choir School, and the Toronto Youth choir. In future, he hopes to raise his voice to fight for those that need to be heard through law, and international relations. Some of his passions include reading, city planning, exploring new places and baseball analytics. He speaks both English and French."
    jerry: "Born in Nanjing, China, Jerry Immigrated to Canada at age 6. First living in Montreal, he quickly became fluent in French. For several years, He studied at Selwyn House School, a bilingual institution, where he developed both his English and French abilities. In 2015, he moved to Toronto to attend Upper Canada College, the most prestigious all-boys private school in Canada. In the summer of 2022, Jerry travelled to Iowa City to participate in the highly competitive and infamous Iowa Young Writer’s Studio, created by the U of Iowa’s MFA writer’s workshop."
    alvin: "Alvin Zhou is a fourth year student at Eton College, taking Maths, Modern History, Latin and Ancient Greek for A Levels. He is particularly passionate about Ancient History and Classical literature , having written articles about topics such as the Second Punic War and translated famous passages of the Iliad and Aeneid. Outside of academics, Alvin is a keen singer, an avid gym-goer, and a fan of field hockey. He also enjoys a game of Minecraft now and then!"
    roy: "Roy Feng is a multifaceted and eager year 11 student at Upper Canada College. Roy is fluent in multiple languages like many of the other members of the team. In his free time, Roy produces beats and songs, and shares them with the world. He’s passionate about volleyball, debate and basketball."
    caleb: "Caleb is a very well rounded student at Upper Canada College. He’s proficient in multiple languages, and disciplines of all kinds. He is an extremely talented musician, taking his talents to the drums and the piano, and a true humanitarian: leader of UCC’s unicef organization. In his free time, Caleb enjoys practicing the drums and traveling."
    jungly: "Jungly is a motivated and strong Upper Canada College student. He is involved in many of the college’s clubs, and is eager to succeed in many fields. In his free time, he enjoys rowing, as a leading member of UCC rowing, fishing and listening to music."
    jeffrey: "Jeffrey is a high level thinker and creator in year 11 at Upper Canada College. Speaking multiple languages, he also enjoys playing hockey and baseball, hiking and researching in his free time."
    kayden: "Kayden is a future engineer that balances athleticism with his academics. He takes up a range of disciplines, including hockey, where he is well decorated. He enjoys being on the ice, science, math and english in his free time."
    botond: "Botond Horvath is a talented, aspiring astrophysicist and year 11 student at Upper Canada College. He is a proficient communicator, and fully trilingual in English, French and Hungarian, with a desire to learn more languages like Italian! In his free time, Botond enjoys reading, researching, martial arts, and performing traditional dances."
</i18n>
<script lang="ts">
export default defineComponent({
  name: 'ChapterPage',
  setup () {
    const chapters = ref([
      {
        name: 'Southwest China',
        members: [{
          name: 'Christina Chen',
          position: 'Director of Development',
          bio: 'bio.christina',
          image: '/images/team/christina.png'
        },
        {
          name: 'Lynn Zhang',
          position: 'Director of Human Resouces',
          bio: 'bio.lynn',
          image: '/images/team/lynn.jpg'
        },
        {
          name: 'Anastasia Mo',
          bio: 'bio.anastasia',
          image: '/images/team/anastasia.png'
        },
        {
          name: 'Ethan Chen',
          bio: 'bio.ethan',
          image: '/images/team/ethan.png'
        },
        {
          name: 'Daisy Wang',
          bio: 'bio.daisy',
          image: '/images/team/daisy.png'
        }]
      },
      {
        name: 'South China',
        members: [{
          name: 'Maggie Liu',
          position: 'Regional Director of Development',
          bio: 'bio.maggie',
          image: '/images/team/maggie.png'
        }, {
          name: 'Derek Zhang',
          position: 'Director of Development',
          bio: 'bio.derek',
          image: '/images/team/derek.jpg'
        },
        {
          name: 'Vicky Zheng',
          position: 'Director of Human Resources',
          bio: 'bio.vicky',
          image: '/images/team/vicky.jpg'
        },
        {
          name: 'Gary Yukun',
          position: 'Director of Marketing',
          bio: 'bio.gary',
          image: '/images/team/gary.png'
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
            image: '/images/team/kristine.jpg'
          }
        ]
      },
      {
        name: 'Canada',
        members: [
          {
            name: 'Eugenio Ciarlandini',
            bio: 'bio.eugenio',
            image: '/images/team/eugenio.jpg'
          },
          {
            name: 'Jerry Jia',
            bio: 'bio.jerry',
            image: '/images/team/jerry.jpg'
          },
          {
            name: 'Roy Feng',
            bio: 'bio.roy'
          },
          {
            name: 'Botond Horvath',
            bio: 'bio.botond'
          },
          {
            name: 'Caleb Chong',
            bio: 'bio.caleb'
          },
          {
            name: 'Jungly Chen',
            bio: 'bio.jungly'
          },
          {
            name: 'Jeffrey Li',
            bio: 'bio.jeffrey'
          },
          {
            name: 'Kayden Visram',
            bio: 'bio.kayden'
          },
          {
            name: 'Noah Stein'
          },
          {
            name: 'Oliver Wong'
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
            position: 'Director of Development',
            bio: 'bio.alvin',
            image: '/images/team/alvin.png'
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
