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
    evan: "Evan Hudson is currently finishing up his Masters of Arts in Education in Teaching English as a Second Language at the University of Alabama at Birmingham. His program offers a free Community English program for adult learners in the Birmingham area, and he is proud to offer the LingoX curriculum to the student teachers who lead the classes. Evan is passionate about the power of communication and its ability to benefit people in multiple ways, and he has worked previously as a health coach focused on improving outcomes based on behavior change. Evan is hoping to do further research utilizing second language acquisition into pre-existing behavior change models to show how learning languages can improve health outcomes in a future doctorate program."
    cilo: "I grew up in China, and for us, English was simply another evaluation in our school system. I learned grammar and vocabulary for testing, but I never focused much on conversation. It wasn’t until I moved to the USA that I started to see language as a tool. Not just a tool for evaluation, but a tool to be used to connect with your local community. Grocery stores, restaurants, and doctor’s visits are one thing, but the ability to have genuine conversations with people around you means a lot. I am a lifelong learner, and the more fluent I have become in English, the more I have seen the differences between that and my first language of Chinese. These differences have helped me understand English even more. I want to teach other adult learners in my community to help them make the same connections that I have."
    facundina: "Facundina Chacón is from La Chorrera. She has been in the educational sector for more than 25 years. She has a Master's in Human Resources and is currently collaborating with her daughter in a language and cultural program. She is also interested in promoting inclusive education and accessibility."
    gabriela: "Gabriela Romero grew up in La Chorrera, Panama. She is an ESL teacher and reading and cultural promoter. In 2011, she traveled to South Korea for a Korean language and culture program and that’s when she started her tutoring journey. She is currently finishing a Post Graduate in Reading Pedagogy with the Argentinian Foundation Mempo Giardinelli. Since 2010, she is deeply interested in accessibility and inclusive education, this encourage her to learn Panamanian sign language and other teaching strategies to be able to support all her students. She has been teaching English at a local cultural center since 2021."
</i18n>
<script>
export default {
  name: 'ChapterPage',
  data () {
    return {
      chapters: [
        {
          name: 'Asia',
          members: [{
            name: 'Christina Chen',
            bio: 'bio.christina',
            image: '/images/team/chapters/christina.jpg'
          },
          {
            name: 'Lynn Zhang',
            bio: 'bio.lynn',
            image: '/images/team/chapters/lynn.jpg'
          },
          {
            name: 'Anastasia Mo',
            bio: 'bio.anastasia',
            image: '/images/team/chapters/anastasia.jpg'
          },
          {
            name: 'Ethan Chen',
            bio: 'bio.ethan',
            image: '/images/team/chapters/ethan.jpg'
          },
          {
            name: 'Daisy Wang',
            bio: 'bio.daisy',
            image: '/images/team/chapters/daisy.jpg'
          },
          {
            name: 'Maggie Liu',
            bio: 'bio.maggie',
            image: '/images/team/chapters/maggie.jpg'
          }, {
            name: 'Derek Zhang',
            bio: 'bio.derek',
            image: '/images/team/chapters/derek.jpg'
          },
          {
            name: 'Vicky Zheng',
            bio: 'bio.vicky',
            image: '/images/team/chapters/vicky.jpg'
          },
          {
            name: 'Gary Yukun',
            bio: 'bio.gary',
            image: '/images/team/chapters/gary.jpg'
          }]
        },
        {
          name: 'North America',
          members: [
            {
              name: 'Evan Hudson',
              bio: 'bio.evan',
              image: '/images/team/chapters/evan.png'
            },
            {
              name: 'Gabriela Romero',
              bio: 'bio.gabriela',
              image: '/images/team/chapters/gabriela.jpg'
            },
            {
              name: 'Cilo Wang',
              bio: 'bio.cilo',
              image: '/images/team/chapters/cilo.jpg'
            },
            {
              name: 'Facundina Chacón',
              bio: 'bio.facundina',
              image: '/images/team/chapters/facundina.jpg'
            },
            {
              name: 'Eugenio Ciarlandini',
              bio: 'bio.eugenio',
              image: '/images/team/chapters/eugenio.jpg'
            },
            {
              name: 'Jerry Jia',
              bio: 'bio.jerry',
              image: '/images/team/chapters/jerry.jpg'
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
          name: 'Europe',
          members: [
            {
              name: 'Alvin Zhou',
              bio: 'bio.alvin',
              image: '/images/team/chapters/alvin.jpg'
            }
          ]
        },
        {
          name: 'Oceania',
          members: [
            {
              name: 'Kristine Peng',
              position: 'Director of Development',
              bio: 'bio.kristine',
              image: '/images/team/chapters/kristine.jpg'
            }
          ]
        }
      ]
    }
  },
  head: {
    title: 'International Chapters'
  }
}
</script>
