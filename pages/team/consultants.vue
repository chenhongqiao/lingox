<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h3 class="text-h3">
        Educational Consultants
      </h3>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>
    <Roster :team="consultants" />
  </v-container>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'
import { Member } from '@/components/Roster.vue'
export default defineComponent({
  name: 'ConsultantsPage',
  setup () {
    const consultants: Ref<Member[]> = ref([
      {
        name: 'Eric Gao',
        position: 'Stanford University',
        bio: 'Eric Gao is a rising Sophomore at Stanford University majoring in Economics and Mathematics, advised by Nobel Laureate Paul Milgrom. His main research interests lies in mechanism design, which utilizes game theoretic tools to improve resource allocations in the real world. While not theorizing about economics, Eric enjoys playing Chess, biking, and watching anime.',
        image: require('@/assets/images/team/eric.jpeg')
      },
      {
        name: 'Joseph Hwang',
        position: 'Havard University',
        bio: 'Joseph Hwang is from Corinth, TX! Some fun facts about him are that he is Korean, has soloed multiple times in a plane, and is the oldest of 4! Some of Joseph’s hobbies include flying, playing tennis, playing the violin, practicing Taekwondo, working out, listening to music, eating, reading Webtoons, watching KDramas, and anything that involves people/friends! During high school, Joseph was involved in Orchestra, AFJROTC, Tennis Team, Class President, Organization Co-Founder, and various club Officer/President! Joseph is currently planning on studying Biomedical Engineering at Harvard University!',
        image: require('@/assets/images/team/joseph.png')
      }, {
        name: 'Yuhua Chen',
        position: 'University of Pennsylvania',
        bio: 'Yuhua Chen is a prospective freshman at the University of Pennsylvania. She will be studying computer science at the School of Engineering and Applied Science. Caroline has developed her passion for STEM since entering high school. She is the co-founder and president of the Hello, World! Club, a STEM Club that works on equal access to technology opportunities for all students. At the same time, she is also the president of the International Student Affinity Group, vice-president of the Science National Honor Society, secretary of the Mu Alpha Theta Honor Society, and head of the Chinese Club. Yuhua is also an enthusiastic research scholar. In both 2019 and 2020, Yuhua received Aspiration in Computing Award from the National Center for Women & Information Technology. Over the summer of 2021, she participated in the Summer Science Program and worked on calculating the orbit of the 2003 UD8 asteroid.',
        image: require('@/assets/images/team/yuhua.png')
      }, {
        name: 'William Choi',
        position: 'JHU BS | Harvard MBE | Brown MD',
        bio: 'William Choi received his BS with honors in Neuroscience and double majored in Philosophy at the Johns Hopkins University. Since his undergraduate years, William has conducted research relating to various neuroethical issues, such as a quality-of-life study on caregivers of individuals with a rare neurological disorder and a capstone project on stakeholders\' perspectives on acceptable outcomes after acquired brain injury. As a rising student doctor, he is interested in studying diverse philosophical approaches to death and dying, and developing patient-centered decision-making models for individuals with neuropsychiatric conditions. He recently completed his Master of Bioethics degree at Harvard, and will be attending the Warren Alpert Medical School of Brown University this upcoming fall.',
        image: require('@/assets/images/team/william.png')
      }, {
        name: 'Rey Shankar',
        position: 'UC Berkeley',
        bio: 'Rey will be studying sociology with a focus on its applications in healthcare at UC Berkeley in the fall. During high school, they did a lot of acting and speech & debate, and became nationally recognized in both by senior year! On top of this, Rey has worked with various professors to conduct research on topics like the decriminalization of illicit substances and its links to the prison industrial complex. When Rey’s not pursuing my academic interests, they love to knit and embroider gifts for friends!',
        image: require('@/assets/images/team/rey.jpeg')
      }, {
        name: 'Anjali Anbu',
        bio: 'Anjali Anbu (Cornell University) is a prospective Global & Public Health Sciences major with a vested interest in institutional equity and a strong passion for the biological & chemical sciences. She is Secretary-General of Academy Model UN at the Bergen County Academies, and specializes in biomedical debate and healthcare policy. In her free time, she works with a student-run nonprofit to promote healthcare equity in rural and urban North India, and is a certified Emergency Medical Technician for pre-hospital emergency services in New Jersey. She enjoys talking to students about how to integrate public health into activism & career services, and she can be reached via email at anjanb2022@gmail.com',
        position: 'Cornell University',
        image: require('@/assets/images/team/anjali.jpeg')
      },
      {
        name: 'Alex Fu',
        bio: 'Alex Fu is a rising freshman at the University of California, Los Angeles, studying environmental science as well as international relations. An avid fishkeeper and gardener, Alex has pursued his interests through his business selling fish, shrimp, and aquatic plants, and is also the vice president of SEEDs, a gardening club. Additionally, he is the captain of the policy debate team, and vice president of mock trial, where he has researched topics ranging from 4th amendment rights to water protection. He was awarded High Honors for his essay on nuclear diplomacy in the 2021 John Locke Essay Competition, and attended California Boys State.',
        position: 'UCLA',
        image: require('@/assets/images/team/alex.jpeg')
      }
    ])

    return { consultants }
  }
})
</script>
