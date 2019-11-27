<template>
  <b-container class="about">
    <b-row>
      <b-col>
         <h2>About Me</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
         <p>Hi, I'm Ben Jefferies, a freelance DevOps engineer with expertise in Web Application Development and Continous Deployment.</p>
         <p>I entered the industry through a less common route in that I didn't graduate from University, however, I was offered an apprenticeship with Nominet which gave me the jump start I needed to pursue my passion in the realm of technology where I gained valuable hands on knowledge as well as gaining industry recognised qualifications.</p>
         <p>Now, 9 years on, I have experience in implementing complex software solutions for a variety of industries varying from Public Sector, Financial to ECommerce.</p>
         <p>In my spare time I like to investigate and play with new technologies (check out my projects on GitHub) and gadgets as well as hiking, dog walking and <a href="https://www.youtube.com/channel/UC3ub6tcMx7teVM65BU2IE6w?view_as=subscriber">drone videography</a>!</p>
         <p>I am currently available to consult or for fixed price work.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scss" scoped>
@media screen and (max-width: 767px) {
  h2 {
    text-align: center;
  }
}
</style>
