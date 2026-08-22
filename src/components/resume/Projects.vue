<template>
  <div>
    <h2 class="projects">Projects</h2>
    <div class="card" v-for="project in projects" :key="project.name">
      <h3 class="card-title">{{ project.name }}</h3>
      <div class="card-body">
        <p>{{ project.description }}</p>
        <ul v-if="project.links.length">
          <li v-for="link in project.links" :key="link.href">
            <a :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          name: 'Cotswold Water Ski Club Fees',
          description: 'A booking and payments platform for members of the waterski club to pay for services using Next.js, Vercel and Stripe.',
          links: [
            { href: 'https://fees.cotswoldski.co.uk', label: 'fees.cotswoldski.co.uk' }
          ]
        },
        {
          name: 'Branch protection bot (70 stars)',
          description: 'A bot tool to temporarily disable and re-enable the Include administrators option in branch protection.',
          links: [
            { href: 'https://github.com/benjefferies/branch-protection-bot', label: 'github.com/benjefferies/branch-protection-bot' }
          ]
        },
        {
          name: 'Garage opener (42 stars)',
          description: 'Using a Raspberry Pi to control a relay switch to open and close garage doors and allow guests or delivery drivers one-time access. Using Auth0 for IAM, Go on the backend and Expo/React Native for the app.',
          links: [
            { href: 'https://github.com/benjefferies/gogo-garage-opener', label: 'github.com/benjefferies/gogo-garage-opener' },
            { href: 'https://github.com/benjefferies/gogo-garage-opener-react-native', label: 'github.com/benjefferies/gogo-garage-opener-react-native' }
          ]
        },
        {
          name: 'FIRE calculator',
          description: 'A web app to help calculate the age of financial independence. Written in TypeScript and deployed using Netlify.',
          links: [
            { href: 'https://github.com/benjefferies/firecalculator.club', label: 'github.com/benjefferies/firecalculator.club' }
          ]
        },
        {
          name: 'Nano notifier',
          description: 'Mobile app built using React Native and a Python backend to do push notifications when you receive a payment.',
          links: [
            { href: 'https://github.com/benjefferies/nanonotifier', label: 'github.com/benjefferies/nanonotifier' }
          ]
        },
        {
          name: 'Covid Near Me',
          description: 'Daily update on COVID-19 data showing hospitalisations and infection rates.',
          links: [
            { href: 'https://github.com/benjefferies/covidnearme.xzy', label: 'github.com/benjefferies/covidnearme.xzy' }
          ]
        },
        {
          name: 'BCS Level 4 Software Engineer Tutor',
          description: 'LLM chat app that can be used to teach students studying for the British Computer Society course using Dify.',
          links: []
        }
      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  h2 {
    text-align: center;
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  .card-body {
    padding-left: 0px;
    padding-right: 0px;
  }
  .card {
    padding-left: 0px;
    padding-right: 0px;
  }
  ul,
  li {
    list-style: none;
    padding-inline-start: 0px;
  }
  li {
    list-style: none;
    padding-inline-start: 10px;
  }
}
.projects {
  text-align: left;
}
a {
  color: #28364f;
}
</style>
