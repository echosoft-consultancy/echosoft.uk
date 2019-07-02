<template>
  <b-container v-bind:style="bgc">
    <b-row class="centering">
      <b-col>
         <h2 class="text-center">About Me</h2>
         <p>Hi, I'm Ben Jefferies, a freelance software developer with expertise in Web Application Development and Web Client Development.</p>
         <p>I entered the industry through a less common route in that I didn't graduate from University, however, I was offered an apprenticeship with Nominet which gave me the jump start I needed to pursue my passion in the realm of technology where I gained valuable hands on knowledge as well as gaining industry recognised qualifications.</p>
         <p>Now, 5 years on, I have experience in implementing complex software solutions for a variety of industries varying from Financial to ECommerce to the realm of the Internet.</p>
         <p>In my spare time I like to investigate and play with new technologies and gadgets as well as hiking and dog walking!</p>
         <p>I am currently available to consult or for fixed price work, so if you'd like to contact me please do by the medium below or just check out my projects on GitHub.</p>
      </b-col>
      <b-col cols="5">
        <h2 class="text-center">Skills</h2>
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Skills from './Skills.vue'
export default {
  name: 'Home',
  components: {
    Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scss" scoped>
h2 {
  font-weight: 700;
}

.centering {
  padding-top: 10vh;
}

p {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 300;
}
</style>
