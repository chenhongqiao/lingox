<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h3 class="text-h3">
        {{ $t('educationalConsultants') }}
      </h3>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>
    <Roster :team="consultants" />
  </v-container>
</template>
<i18n lang="yaml">
en:
  bio:
    eric: "Eric Gao is a rising Sophomore at Stanford University majoring in Economics and Mathematics, advised by Nobel Laureate Paul Milgrom. His main research interests lies in mechanism design, which utilizes game theoretic tools to improve resource allocations in the real world. While not theorizing about economics, Eric enjoys playing Chess, biking, and watching anime."
    joseph: "Joseph Hwang is from Corinth, TX! Some fun facts about him are that he is Korean, has soloed multiple times in a plane, and is the oldest of 4! Some of Joseph’s hobbies include flying, playing tennis, playing the violin, practicing Taekwondo, working out, listening to music, eating, reading Webtoons, watching KDramas, and anything that involves people/friends! During high school, Joseph was involved in Orchestra, AFJROTC, Tennis Team, Class President, Organization Co-Founder, and various club Officer/President! Joseph is currently planning on studying Biomedical Engineering at Harvard University!"
    yuhua: "Yuhua Chen is a prospective freshman at the University of Pennsylvania. She will be studying computer science at the School of Engineering and Applied Science. Caroline has developed her passion for STEM since entering high school. She is the co-founder and president of the Hello, World! Club, a STEM Club that works on equal access to technology opportunities for all students. At the same time, she is also the president of the International Student Affinity Group, vice-president of the Science National Honor Society, secretary of the Mu Alpha Theta Honor Society, and head of the Chinese Club. Yuhua is also an enthusiastic research scholar. In both 2019 and 2020, Yuhua received Aspiration in Computing Award from the National Center for Women & Information Technology. Over the summer of 2021, she participated in the Summer Science Program and worked on calculating the orbit of the 2003 UD8 asteroid."
    william: "William Choi received his BS with honors in Neuroscience and double majored in Philosophy at the Johns Hopkins University. Since his undergraduate years, William has conducted research relating to various neuroethical issues, such as a quality-of-life study on caregivers of individuals with a rare neurological disorder and a capstone project on stakeholders' perspectives on acceptable outcomes after acquired brain injury. As a rising student doctor, he is interested in studying diverse philosophical approaches to death and dying, and developing patient-centered decision-making models for individuals with neuropsychiatric conditions. He recently completed his Master of Bioethics degree at Harvard, and will be attending the Warren Alpert Medical School of Brown University this upcoming fall."
    rey: "Rey will be studying sociology with a focus on its applications in healthcare at UC Berkeley in the fall. During high school, they did a lot of acting and speech & debate, and became nationally recognized in both by senior year! On top of this, Rey has worked with various professors to conduct research on topics like the decriminalization of illicit substances and its links to the prison industrial complex. When Rey’s not pursuing my academic interests, they love to knit and embroider gifts for friends!"
    anjali: "Anjali Anbu (Cornell University) is a prospective Global & Public Health Sciences major with a vested interest in institutional equity and a strong passion for the biological & chemical sciences. She is Secretary-General of Academy Model UN at the Bergen County Academies, and specializes in biomedical debate and healthcare policy. In her free time, she works with a student-run nonprofit to promote healthcare equity in rural and urban North India, and is a certified Emergency Medical Technician for pre-hospital emergency services in New Jersey. She enjoys talking to students about how to integrate public health into activism & career services, and she can be reached via email at anjanb2022@gmail.com"
    alex: "Alex Fu is a rising freshman at the University of California, Los Angeles, studying environmental science as well as international relations. An avid fishkeeper and gardener, Alex has pursued his interests through his business selling fish, shrimp, and aquatic plants, and is also the vice president of SEEDs, a gardening club. Additionally, he is the captain of the policy debate team, and vice president of mock trial, where he has researched topics ranging from 4th amendment rights to water protection. He was awarded High Honors for his essay on nuclear diplomacy in the 2021 John Locke Essay Competition, and attended California Boys State."
    audrey: "Audrey Pe (@audreyisabelpe) is a junior at Stanford University and the founder of WiTech (@witechorg) -- a nonprofit organisation based in the Philippines that aims to educate, inspire, and empower youth to break gender barriers and use tech to make a difference in society. WiTech currently has 26 chapters across 10 countries around the world. At Stanford, she is a Science, Technology, and Society major with a minor in Education. She is also a research assistant for Stanford’s Graduate School of Education, with a focus on projects dealing with diversity, equity, and inclusion. Her work with WiTech has garnered her recognition as a 2020 Tatler Gen.T Leader of Tomorrow, 2019 Global Teen Leader, 2020 Pinterest Council of Courage member, 2018 Zonta Young Women in Public Affairs District awardee, 2019 Zonta Women in Technology Asia-Pacific District Scholar, Opportunity Desk 30 Under 30 Changemaker, 2020 Women in IT Advocate of the Year Finalist, and 2019 Women in Tech Global Aspiring Teen Award Finalist. A four-time TEDx, ASEAN and UN speaker, she has delivered over 100+ talks and has also been featured in local and international publications like Forbes and CNN Philippines. Her work was also highlighted in the 2020 United Nations Girls Education Initiative documentary."
  stanford: Stanford University
  havard: Havard University
  upenn: University of Pennsylvania
  jhuAndOthers: JHU BS | Harvard MBE | Brown MD
  berkeley: UC Berkeley
  cornell: Cornell University
  ucla: UCLA
zh:
  bio:
    eric: "Eric Gao 是斯坦福大学经济和数学专业大二的学生，由诺贝尔奖获得者 Paul Milgrom 指导。他的主要研究兴趣是机制设计，探索利用博弈论来改善现实世界中的资源分配。在研究经济学理论之外，Eric喜欢下国际象棋、骑自行车和看动漫。"
    joseph: "Joseph Hwang 来自德克萨斯州的科林斯。关于他的一些有趣的事是，他是韩国人，曾多次单独驾驶飞机，是家里4 个孩子中的老大！Joseph 的业余爱好包括飞行、打网球、拉小提琴、练习跆拳道、健身，听音乐、享受美食，看网络漫画、看韩剧以及结识新朋友！在高中时期，Joseph参与了管弦乐队、AFJROTC、网球队，担任了班长、企业联合创始人以及各种俱乐部的负责人！Joseph目前在哈佛大学学习生物医学工程。"
    yuhua: "Yuhua Chen就读于宾夕法尼亚大学。她在工程和应用科学学院学习计算机科学。从进入高中开始，Yuhua就对STEM产生了浓厚的兴趣。她是“Hello, World”的联合创始人和主席。一个致力于让所有学生平等获得技术机会的STEM俱乐部。同时，她也是国际学生协会主席，国家科学荣誉协会副会长，穆阿尔法·西塔（Mu Alpha Theta）荣誉协会秘书，中文俱乐部会长。Yuhua也是一位热情的研究学者。在2019年和2020年，Yuhua获得美国妇女和信息技术中心的“计算奖”。2021年夏天，她参加了夏季科学计划，并致力于计算2003年UD8小行星的轨道。"
    william: "威廉·崔获得了约翰·霍普金斯大学神经科学荣誉学士和哲学学士双学位。从本科开始，威廉就进行了有关各种神经伦理问题的研究，例如对患有罕见神经疾病的病患生活质量的研究，以及对后天性脑损伤后可接受结果的前沿项目。作为一名医学生，他的兴趣是对不同形式的死亡和垂死的哲学研究，并为患有精神疾病的患者开发以病患为中心的决策模型。他最近在哈佛大学获得了生物伦理学硕士学位，并将于今年秋季进入布朗大学沃伦·阿尔伯特医学院（Warren Alpert Medical School)攻读医学博士。"
    rey: "Rey在加州大学伯克利分校学习社会学，重点研究社会学在医疗保健中的应用。在高中时期，她经常参加演讲和辩论比赛，并在全国比赛中获得了优异的成绩！在学术之外，Rey喜欢针织和为朋友们制做刺绣品。"
    anjali: "Anjali是一名国际健康专业学生，对生物学和化学科学充满激情。她在卑尔根县学院的模拟联合国社团担任秘书长，针对生物医学和医疗保健政策的相关话题开展辩论。Anjali利用课余时间，与一个学生运营的非营利组织合作，致力于促进印度北部农村和城市医疗保健政策的公平机制及其实现。她是新泽西州院前急救服务的急救员。"
    alex: "Alex是一位加州大学洛杉矶分校的学生，他主修环境科学和国际关系双学科。Alex是一个狂热的养鱼者和园丁，他通过销售鱼、虾和水生植物来追求自己的兴趣，他也是园艺俱乐部SEEDs的副总裁。此外，他还是政策辩论队的队长，以及模拟审判的副主席，他在模拟审判中研究的话题从第四修正案权利到水保护。Alex在2021年约翰·洛克论文竞赛中获得了最高荣誉奖项，并参加了加州男子州立组织。"
  stanford: 斯坦福大学
  havard: 哈佛大学
  upenn: 宾夕法尼亚大学
  jhuAndOthers: 约翰霍普金斯本科 | 哈佛生物工程硕士 | 布朗医学博士
  berkeley: UC Berkeley
  cornell: Cornell University
  ucla: UCLA
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
          image: '/images/team/eric.jpg'
        },
        {
          name: 'Joseph Hwang',
          position: 'havard',
          bio: 'bio.joseph',
          image: '/images/team/joseph.jpg'
        }, {
          name: 'Yuhua Chen',
          position: 'upenn',
          bio: 'bio.yuhua',
          image: '/images/team/yuhua.jpg'
        }, {
          name: 'William Choi',
          position: 'jhuAndOthers',
          bio: 'bio.william',
          image: '/images/team/william.jpg'
        }, {
          name: 'Audrey Pe',
          position: 'stanford',
          bio: 'bio.audrey',
          image: '/images/team/audrey.jpg'
        },
        {
          name: 'Rey Shankar',
          position: 'berkeley',
          bio: 'bio.rey',
          image: '/images/team/rey.jpg'
        }, {
          name: 'Anjali Anbu',
          bio: 'bio.anjali',
          position: 'cornell',
          image: '/images/team/anjali.jpg'
        },
        {
          name: 'Alex Fu',
          bio: 'bio.alex',
          position: 'ucla',
          image: '/images/team/alex.jpg'
        }
      ]
    }
  },
  head: {
    title: 'Educational Consultants'
  }
}
</script>
