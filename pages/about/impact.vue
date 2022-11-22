<template>
  <div>
    <v-container class="pt-4 pt-lg-8">
      <h3 class="text-h3">
        Our Impact
      </h3>
      <div class="text-h4 primary--text mt-6 text-center">
        Shoujen Scholars Program
      </div>
      <div class="text-h5 mt-4 text-center">
        {{ sspText }}
      </div>
    </v-container>
    <v-container class="pb-2">
      <v-container class="py-2 ma-2">
        <v-row align="center">
          <v-col
            cols="12"
            md="6"
          >
            <v-row class="align-center">
              <v-col
                v-for="(item, i) in stats.slice(0, 2)"
                :key="i"
                cols="12"
                class="text-center"
                color="blue"
              >
                <v-card class="pa-3" height="100%">
                  <div class="text-h2">
                    {{ item.value }}
                  </div>
                  <div class="text-h6 text-lg-h5 mt-2">
                    {{ item.label }}
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/images/maps/pink-world.png" max-height="300" contain />
          </v-col>
        </v-row>
      </v-container>

      <v-container class="py-2 ma-2">
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-img src="/images/intro-chinese.jpg" max-height="300" contain class="rounded-lg" />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-row class="align-center">
              <v-col
                v-for="(item, i) in stats.slice(2, 4)"
                :key="i"
                cols="12"
                class="text-center"
                color="blue"
              >
                <v-card class="pa-3" height="100%">
                  <div class="text-h2">
                    {{ item.value }}
                  </div>
                  <div class="text-h6 text-lg-h5 mt-2">
                    {{ item.label }}
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="py-2 ma-2">
        <v-row align="center">
          <v-col
            cols="12"
            md="6"
          >
            <v-row class="align-center">
              <v-col
                v-for="(item, i) in stats.slice(4, 6)"
                :key="i"
                cols="12"
                class="text-center"
                color="blue"
              >
                <v-card class="pa-3" height="100%">
                  <div class="text-h2">
                    {{ item.value }}
                  </div>
                  <div class="text-h6 text-lg-h5 mt-2">
                    {{ item.label }}
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="/images/money.png" max-height="300" contain />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sspText: 'The SSP offers the equivalent of an 3-month introductory college-level Mandarin Chinese course with weekly live sessions, 24/7 support, and after-class homework.',
      stats: [
        {
          label: 'Continents Reached',
          value: '6'
        },
        {
          label: 'Countries Reached',
          value: '95'
        },

        {
          label: 'Hours of Collective Instruction Offered',
          value: '4950'
        },
        {
          label: 'Felt Their Chinese Improved',
          value: '100%'
        },
        {
          label: 'Worth of Free Tuition Offered',
          value: '$756K'
        },
        {
          label: 'Below Average US Household Income',
          value: '97%'
        }
      ]
    }
  },
  head: {
    title: 'Our Impact'
  }
}
</script>
