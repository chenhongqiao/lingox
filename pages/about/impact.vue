<template>
  <div>
    <v-container class="pt-4 pt-lg-8">
      <h3 class="text-h3">
        {{ $t('ourImpact') }}
      </h3>
      <div class="text-h4 primary--text mt-6 text-center">
        {{ $t('introChinese') }}
      </div>
      <div class="text-h6 mt-4 text-center">
        {{ $t('sspText') }}
      </div>
    </v-container>
    <v-container class="pb-2">
      <v-col cols="12" class="d-md-none">
        <v-img src="/images/maps/pink-world.png" max-height="300" contain />
      </v-col>
      <v-row align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            v-for="(item, i) in stats.slice(0, 2)"
            :key="i"
            class="pa-4 text-center mx-2 my-6"
          >
            <div class="text-h2">
              {{ item.value }}
            </div>
            <div class="text-h6  mt-2">
              {{ item.label }}
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" class="d-none d-md-flex">
          <v-img src="/images/maps/pink-world.png" max-height="300" contain />
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" md="6">
          <v-img src="/images/intro-chinese.jpg" max-height="300" contain class="rounded-lg" />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            v-for="(item, i) in stats.slice(2, 4)"
            :key="i"
            class="pa-4 text-center mx-2 my-6"
          >
            <div class="text-h2">
              {{ item.value }}
            </div>
            <div class="text-h6  mt-2">
              {{ item.label }}
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" class="text-center d-md-none">
          <v-icon size="400" color="primary" class="my-n8">
            mdi-currency-usd
          </v-icon>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            v-for="(item, i) in stats.slice(4, 6)"
            :key="i"
            class="pa-4 text-center mx-2 my-6"
          >
            <div class="text-h2">
              {{ item.value }}
            </div>
            <div class="text-h6 mt-2">
              {{ item.label }}
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" class="text-center d-none d-md-flex">
          <v-icon size="400" color="primary">
            mdi-currency-usd
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<i18n lang="yaml">
en:
  sspText: "The SSP offers the equivalent of an 3-month introductory college-level Mandarin Chinese course with weekly live sessions, 24/7 support, and after-class homework."
</i18n>
<script>
export default {
  data () {
    return {
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
