// Not used

<template>
  <v-container class="py-4 py-lg-8">
    <v-responsive max-width="1200" class="mx-auto text-center">
      <h3 class="text-h3">
        Featured Tutors
      </h3>
      <div style="width: 80px; height: 4px" class="my-4 secondary mx-auto" />
    </v-responsive>
    <Roster :team="tutors" />
  </v-container>
</template>
<script>
export default {
  name: 'TutorsPage',
  data () {
    return {
      tutors: [
        {
          name: 'Eric Gao',
          position: 'Stanford University',
          bio: 'Eric Gao is a rising Sophomore at Stanford University majoring in Economics and Mathematics, advised by Nobel Laureate Paul Milgrom. His main research interests lies in mechanism design, which utilizes game theoretic tools to improve resource allocations in the real world. While not theorizing about economics, Eric enjoys playing Chess, biking, and watching anime.',
          image: '/images/team/eric.jpg'
        }, {
          name: 'Rey Shankar',
          position: 'UC Berkeley',
          bio: 'Rey will be studying sociology with a focus on its applications in healthcare at UC Berkeley in the fall. During high school, they did a lot of acting and speech & debate, and became nationally recognized in both by senior year! On top of this, Rey has worked with various professors to conduct research on topics like the decriminalization of illicit substances and its links to the prison industrial complex. When Rey’s not pursuing my academic interests, they love to knit and embroider gifts for friends!',
          image: '/images/team/rey.jpg'
        }
      ]
    }
  },
  head: {
    title: 'Featured Tutors'
  }
}
</script>
