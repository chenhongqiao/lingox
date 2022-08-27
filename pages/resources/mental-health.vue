<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      {{ $t('mentalHealthResources') }}
    </h3>
    <v-row class="mt-4">
      <v-col cols="12">
        <div class="text-body-1 mb-2">
          {{ $t('intro') }}
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            General Resources
          </h4>
          <div v-for="(resource,index) in generalResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            US Resources
          </h4>
          <div v-for="(resource,index) in USResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            Canada Resources
          </h4>
          <div v-for="(resource,index) in canadaResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            Europe Resources
          </h4>
          <div v-for="(resource,index) in europeResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            UK Resources
          </h4>
          <div v-for="(resource,index) in UKResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            Australia Resources
          </h4>
          <div v-for="(resource,index) in australiaResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            New Zealand Resources
          </h4>
          <div v-for="(resource,index) in newZealandResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            China Resources
          </h4>
          <div v-for="(resource,index) in chinaResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h4 class="text-h5">
            Africa Resources
          </h4>
          <div v-for="(resource,index) in africaResources" :key="index" class="mt-2">
            <h5 class="text-h6">
              <a :href="resource.link">{{ resource.name }}</a>
            </h5>
            <div class="text-body-1">
              {{ resource.description }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<i18n lang="yaml">
en:
  mentalHealthResources: "Mental Health Resources"
  intro: "At LingoX, our mission is to support a balanced education for all students. As such, we focus on nurturing both your language abilities as well as a healthy mind. To help foster positive mental health, LingoX is committed to sharing a variety of helpful resources. The below options are available to support you through difficult situations; however, your best choice is always to consult a physician or responsible adult in your life, especially if you are struggling with serious issues."
</i18n>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
interface Resource {
  name: string
  link: string
  description: string
}
export default defineComponent({
  name: 'MentalHealth',
  setup () {
    const generalResources: Resource[] = [
      {
        name: 'Befrienders',
        link: 'http://www.befrienders.org/',
        description: 'Befrienders Worldwide centres provide an open space for those in distress to talk and be heard. This is via telephone helplines, SMS messaging, face to face, internet chat, outreach and local partnerships.'
      },
      {
        name: 'Lifeline International',
        link: 'Lifeline International',
        description: 'LifeLine International is a member-based organisation. Our Members deliver crisis support helplines and community-based suicide prevention services across the world.'
      },
      {
        name: 'International Suicide Hotlines',
        link: 'http://www.suicide.org/international-suicide-hotlines.html',
        description: 'Suicide hotlines organized by country.'
      },
      {
        name: 'International Association for Suicide Prevention – Resources: Crisis Centers',
        link: 'https://www.iasp.info/resources/Crisis_Centres/',
        description: 'Suicide hotlines and crisis centers organized by country.'
      },
      {
        name: 'IMALIVE',
        link: 'https://www.imalive.org/',
        description: 'Resource dedicated to suicide intervention, prevention, awareness, and education.'
      },
      {
        name: '7 Cups of Tea',
        link: 'http://www.7cupsoftea.com/',
        description: 'Trained volunteer listeners available 24/7 to give emotional support over online chat.'
      }
    ]

    const USResources: Resource[] = [
      {
        name: 'National Alliance on Mental Illness',
        link: 'http://www.nami.org/',
        description: 'NAMI, the National Alliance on Mental Illness, is the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.'
      }, {
        name: 'Teen & Youth Help Hotline',
        link: 'https://teenlineonline.org/talk-now/',
        description: 'Resource providing hope and support through trained teen volunteers.'
      }, {
        name: '988',
        link: '',
        description: 'The three-digit, nationwide phone number to connect directly to the 988 Suicide and Crisis Lifeline. By calling or texting 988, you’ll connect with mental health professionals with the 988 Suicide and Crisis Lifeline, formerly known as the National Suicide Prevention Lifeline.'
      }
    ]

    const canadaResources: Resource[] = [
      {
        name: 'Canadian Mental Health Association',
        link: 'https://cmha.ca/',
        description: 'A nationwide organization that promotes mental health and supports people recovering from mental illness.'
      }, {
        name: 'Mentalhealthcanada.com',
        link: 'http://www.mentalhealthcanada.com/',
        description: 'A national comprehensive directory of Psychiatrists, Psychologists, Psychoanalysts, Counsellors, and Psychotherapists.'
      }
    ]

    const europeResources: Resource[] = [
      {
        name: 'European Federation of Associations of Families of People with Mental Illness',
        link: 'http://www.eufami.org/',
        description: 'An online information source for people with severe mental illness and their families and friends.'
      }, {
        name: 'WHO Europe',
        link: 'http://www.euro.who.int/en/health-topics/noncommunicable-diseases/mental-health',
        description: 'WHO Europe provides mental health information from the World Health Organisation.'
      }
    ]

    const UKResources: Resource[] = [
      {
        name: 'Mental Health Foundation ',
        link: 'http://www.mentalhealth.org.uk/',
        description: 'The Mental Health Foundation is an organization dedicated to mental health education and spreading awareness.'
      },
      {
        name: 'Together',
        link: 'http://www.together-uk.org/',
        description: 'Together is a national charity working alongside people on their journey towards better mental wellbeing and independent lives.'
      }
    ]

    const australiaResources: Resource[] = [
      {
        name: 'Your Health In Mind',
        link: 'https://www.yourhealthinmind.org/',
        description: 'Your Health in Mind provides expert information about mental illness, treatments, psychiatrists, and how to get help.'
      },
      {
        name: 'Kids Helpline',
        link: 'http://www.kidshelp.com.au/',
        description: 'Kids Helpline is Australia’s only national 24/7 telephone and online counselling and support service for young people aged between 5 and 25 years.'
      },
      {
        name: 'Lifeline',
        link: 'https://www.lifeline.org.au/',
        description: 'A resource providing 24/7 crisis support and suicide prevention services for Australians.'
      },
      {
        name: 'Headspace',
        link: 'https://headspace.org.au/',
        description: 'headspace is the National Youth Mental Health Foundation, supporting young people with mental health, physical health (including sexual health), alcohol and other drug services, as well as work and study support.'
      }
    ]

    const newZealandResources: Resource[] = [
      {
        name: 'The Mental Health Foundation of New Zealand',
        link: 'https://www.mentalhealth.org.nz/',
        description: 'A charity that works towards creating a society free from discrimination, where all people enjoy positive mental health & wellbeing.'
      }
    ]

    const chinaResources: Resource[] = [
      {
        name: 'Beijing Suicide Research and Prevention Center Hotline',
        link: 'http://www.crisis.org.cn/',
        description: 'A hotline providing public services nationwide twenty four hours every day, specializing in mental health education and support.'
      },
      {
        name: 'Lifeline Shanghai',
        link: 'http://www.lifelineshanghai.com/',
        description: ''
      }
    ]

    const africaResources: Resource[] = [
      {
        name: 'South African Federation for Mental Health',
        link: 'https://www.safmh.org/',
        description: 'A resource promoting community mental health care and deinstitutionalisation and fighting for the rights of persons with psychosocial and intellectual disabilities.'
      },
      {
        name: 'South African Depression and Anxiety Group',
        link: 'http://www.sadag.org/',
        description: 'A resource dedicated toward patient advocacy, education and destigmatisation of mental illness in the country. Its expertise lies in assisting patients and callers throughout South Africa with mental health queries.'
      },
      {
        name: 'Mental Health Information Centre',
        link: 'https://mentalhealthsa.org.za/',
        description: 'A site providing the South African public and professionals with up-to-date mental health information as well as an accessible easy-to-use database of mental health professionals.'
      }, {
        name: 'StrongMinds',
        link: 'https://strongminds.org/',
        description: 'A non-profit that treats depression in women and adolescents in low-income communities in sub-Saharan Africa. '
      }
    ]

    return { generalResources, USResources, europeResources, UKResources, canadaResources, newZealandResources, chinaResources, africaResources, australiaResources }
  },
  head: {
    title: 'Mental Health Resources'
  }
})
</script>