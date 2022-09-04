<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h2 class="text-h3">
        {{ $t('executiveBoard') }}
      </h2>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>

    <Roster :team="team" />
  </v-container>
</template>
<i18n lang="yaml">
en:
  bio:
    mial: Mia is greatly passionate about education and strives to make learning resources more accessible for all. She founded LingoX with the goal construct an inclusive, welcoming environment for all students to pursue their passion, background notwithstanding. In her free time, Mia enjoys playing the piano, creative writing, and traveling to new places. She is always happy to make new friends and answer any questions you may have about LingoX!
    harry: Growing up in China and spending his first seven years of K-12 education in a non-English environment, Harry recognizes that for all English learners to unleash their full potential, creating an inclusive community with equitable access to quality education is essential. Having been exploring computer science for many years, Harry hopes to connect people in different regions around the world with the help of technology and pursue the goals of LingoX. Harry also plays tennis and likes to code while cooking.,
    tyler: Tyler, being the older of two siblings, finds tremendous value in the power of education as a means to open up doors of possibility and reshape the world. As a part of LingoX, he hopes to make English education accessible to ALL. Aside from his passion for education, Tyler’s identity stands as a volleyball player and a photographer who would not hesitate to hang out and meet new friends whenever the opportunity arises.
    david: David is currently a senior at University High School in Irvine, California. Being involved in different activities such as MUN and FBLA, he has learned about the importance of both communication and the importance of trying to help out one's community. At LingoX, he hopes to achieve this goal by making English a more accessible language to those who may not have the opportunities. Outside of school, David enjoys playing golf and listening to music.
    hannah: Coming from a multicultural background, Hannah values learning about different cultures and languages. Through LingoX, she hopes that she will be able to encourage and empower other students to also be passionate about their culture. During her free time, Hannah enjoys drawing, going to the beach, and playing the piano.
    jane: As a first-generation immigrant with parents in the education industry, Jane Wang recognizes the importance of English education for youth in underserved communities. It is essential for those to communicate and connect with people they could not understand before and therefore understand the world in a more enormous scope. Jane hopes to utilize her previous experience in advertising and marketing to reach a larger international audience, especially young women wanting to pursue higher education. Outside of her academics, Jane enjoys pursuing visual arts and designing escape rooms.
    sanjana: Sanjana is a rising senior in Irvine, California. Being a first-generation immigrant and her Indian heritage has exposed her to a multitude of different languages and how valuable language and words can be. Being able to speak 4 languages has opened her eyes to the beauty that each language possesses, and she hopes she can share her love of languages with others through LingoX. Aside from education, Sanjana is an avid badminton player and is really passionate about mental health awareness.
    jia: As a Korean immigrant, her own very personal ties to education and language have spurred her passion for education and motivated her to join this program. She wishes to share her enthusiasm for Lingo X with others and contribute to the objective of spreading knowledge and the beauty of education elsewhere. Jia enjoys golf and reading outside of school.,
    simone: Simone Rothaupt is a rising senior at Rancho Solano Preparatory School in Phoenix, Arizona. She intends on majoring in economics and public policy in college. Through LingoX, she aims to assist in its global endeavor to improve language education. Her outside interests include long-distance running and creative writing.
    abby: As an incipient junior in Southern California, Abby Warnock is looking forward to encouraging all students to pursue their interests regardless of their situation. She believes that there is a plethora of information to learn from one another, which is why she hopes that working with LingoX will help others understand that everyone deserves a chance to learn about topics they are passionate about. When not involved in academics, Abby enjoys making new friends and developing her skills in visual arts.
    miah: Through her contributions to LingoX she hopes to help spread access to education around the world. Mia is looking forward to being able to utilize her experiences in other organizations to help LingoX encourage students to follow their passions. During her free time, Mia loves to go on hikes, explore outside, and hang out with her friends to make new experiences.
    shivali: Shivali Shrivastava is a rising sophomore. Being raised as a first-generation immigrant with Indian parents, she has been exposed to many valuable languages. She plans to use LingoX as a bridge to connect impoverished communities with quality education. During her free time, Shivali enjoys taking walks on the beach or making memories with her friends.
    sarah: As a Chinese-American student who studied in multiple countries, Sarah Xie deeply comprehends how English serves as a vital tool in every educational aspect. She wishes to help youngsters in underserved communities get the chance to achieve their dreams through LingoX. In her free time, Sarah enjoys playing tennis, painting as well as traveling.
    judy: Judy Tao, an uprising junior who completed her first seven years of education in China, recognized the significance of studying and appreciating diverse languages and cultures. Thus, she wished to explore and enhance the education of languages through LingoX, and also assist the students who want to learn languages. During her free time, she enjoys dancing, painting, playing card games, and hanging out with her friends.
    ryan: "Ryan is an aspiring neurosurgeon who takes a great interest in neuroscience and computer science. In his free time he likes to play with Rubik’s cubes, cook, and partake in public speaking events. He is currently fluent in two languages and is learning a third. Although he doesn’t want to go into a music career, Ryan also plays the viola and piano as a hobby. He is a very sociable person who will befriend anyone who approaches him."
    bruno: "Bruno is a sophomore at University High School, where he writes for his school newspaper and participates in Mock Trial, Model United Nations, and Speech & Debate. From these activities, Bruno learned the significance of effective communication. As the son of two immigrants, Bruno was raised hearing stories from his parents about the struggles of learning English. In his free time, you might find Bruno playing with his two cats, eating an In-N-Out burger with friends, or playing board games with family."
    kevin: "Kevin is currently a junior at Northwood High School in Irvine, California. Since he lived in multiple different countries, he realizes the need for students around the world to have an accessible education to help break language barriers. He is interested in computer science, and hopes to use it to benefit the global community. In his free time, Kevin enjoys music production, playing tennis, and sleeping."
zh:
  bio:
    mial: Mia 对教育充满热情，致力于帮助贫困社区和弱势家庭的学生获得平等、优质的教育资源。Mia 的业余爱好是弹钢琴，打高尔夫，写作和旅行。
    harry: Harry在中国接受了7年的基础教育。这段在非英语环境下学习英语的经历使他意识到高质量的教材和课程对于激发外语潜力至关重要。多年来，Harry一直在信息技术领域学习和探索。他希望能够创建一个科技驱动的教学平台来连接世界各地不同地区的人们，最终实现LingoX增强平等的目标。此外，Harry还喜欢打网球和做饭。他有时会在紧张的烹饪过程中抽出时间写代码。
    tyler: Tyler深信教育是开启一切可能性之门，也是塑造自我世界的一种机会。作为LingoX的一员，他希望能够帮助世界各地的贫困学生获得免费的语言教育。除了对教育的热情，Tyler还是一名排球运动员和摄影师。
    david: 通过参加模联和FBLA，David了解到了帮助社区的重要性。在LingoX，他希望通过语言教育帮助那些生活在贫困及资源落后社区的孩子获得链接世界的能力。校外，David喜欢打高尔夫和听音乐。
    hannah: Hannah来自多元的文化背景，热衷于了解和学习不同的文化和语言。通过LingoX，她希望能够鼓励不同文化背景的学生对他们的传统文化充满热情。闲暇时，Hannah喜欢画画、去海滩和弹钢琴。
    jane: Jane的父母是从事教育行业的华裔第一代移民，Jane 意识到语言教育对落后社区青少年的重要性。学习一门外语可以帮助他们更多的了解世界，与更广泛的人群交流和学习。Jane希望利用她在市场营销方面的经验来开发更多的国际受众，尤其是想要追求高等教育的年轻女性。在学术之外，Jane喜欢追求视觉艺术和设计密室逃脱。
    sanjana: Sanjana是美国加州的第一代移民，她的印度血统使她接触到许多不同的语言，并且了解到学习语言的重要性。能说4种语言使她感受到每一种语言的美妙。她希望通过LingoX与大家分享她对语言的热爱。Sanjana还致力于呼吁关怀青少年心理健康，她同时任职全美青少年生命保护组织Hope Squad 的主席， 并且是一位优秀的羽毛球运动员。
    jia: Jia来自韩国，她理解语言在教育和生活中的重要性。她希望与他人分享她对Lingo X的热情，并立志为传播知识和教育之美做出贡献。Jia喜欢阅读，她还是一名优秀的高尔夫球手。
    simone: Simone Rothaupt来自亚利桑那州凤凰城，她在大学主修经济学和公共政策。通过LingoX，她的目标是在全球范围内实现为贫困社区的学生提供免费的语言教育。她的业余爱好包括长跑和创意写作。
    abby: Abby Warnock希望鼓励所有的学生无论何时都要追求自己的兴趣爱好。她认为每个人都应该有平等的机会学习他们感兴趣的知识和技能。Abby喜欢结交新朋友和发展她的视觉艺术技能。
    miah: Mia Hennequin 希望通过LingoX的公益活动，帮助世界各地的贫困儿童普及语言教育。Mia期待着能够利用她的热情和经验来鼓励LingoX的学生追随他们的梦想。Mia 爱好社交和创新，以及徒步探索世界。
    shivali: Shivali Shrivastava的父母是来自印度的第一代移民，她精通多门语言。她希望通过LingoX作为连接贫困社区并为他们提供优质教育的桥梁。Shivali喜欢在海滩上散步，与好友共享休闲时光。
    sarah: 作为一名曾在多个国家留学的美籍华裔学生，Sarah深知英语在学习和生活以及各个方面的重要性。她希望通过LingoX来帮助贫困社区的学生获得实现梦想的机会。闲暇时，Sarah喜欢打网球、画画以及旅游。
</i18n>
<script lang="ts">
import { defineComponent, ref, Ref, useContext } from '@nuxtjs/composition-api'
import { Member } from '~/components/Roster.vue'
export default defineComponent({
  name: 'BoardPage',
  setup () {
    const { $img } = useContext()
    const team: Ref<Member[]> = ref([
      {
        name: 'Mia Lee',
        position: 'CEO',
        bio: 'bio.mial',
        image: $img('team/mial.png')
      },
      {
        name: 'David Chen',
        position: 'CMO',
        bio: 'bio.david',
        image: $img('team/david.jpg')
      }, {
        name: 'Hannah Choi',
        position: 'AMO',
        bio: 'bio.hannah',
        image: $img('team/hannah.png')
      },
      {
        name: 'Jane Wang',
        position: 'AMO',
        bio: 'bio.jane',
        image: $img('team/jane.png')
      },
      {
        name: 'Shivali Shrivastava',
        position: 'ADO',
        bio: 'bio.shivali',
        image: $img('team/shivali.png')
      }, {
        name: 'Sarah Xie',
        position: 'ADO',
        bio: 'bio.sarah',
        image: $img('team/sarah.png')
      },
      {
        name: 'Bruno Diaz',
        position: 'ADO',
        bio: 'bio.bruno',
        image: $img('team/bruno.jpg')
      }, {
        name: 'Sanjana Ramakrishnan',
        position: 'CFO',
        bio: 'bio.sanjana',
        image: $img('team/sanjana.jpg')
      }, {
        name: 'Jia An',
        position: 'AFO',
        bio: 'bio.jia',
        image: $img('team/jia.png')
      }, {
        name: 'Harry Chen',
        position: 'CTO',
        bio: 'bio.harry',
        image: $img('team/harry.png')
      }, {
        name: 'Tyler Truong',
        position: 'ATO',
        bio: 'bio.tyler',
        image: $img('team/tyler.png')
      },
      {
        name: 'Ryan',
        position: 'ATO',
        bio: 'bio.ryan',
        image: $img('team/ryan.png')
      },
      {
        name: 'Kevin Chu',
        position: 'ATO',
        bio: 'bio.kevin',
        image: $img('team/kevin.jpg')
      },
      {
        name: 'Simone Rothaupt',
        position: 'CPRO',
        bio: 'bio.simone',
        image: $img('team/simone.png')
      }, {
        name: 'Abby Warnock',
        position: 'APRO',
        bio: 'bio.abby',
        image: $img('team/abby.png')
      },
      {
        name: 'Judy Tao',
        position: 'APRO',
        bio: 'bio.judy',
        image: $img('team/judy.png')
      }
    ])

    return { team }
  },
  head: {
    title: 'Executive Board'
  }
})
</script>
