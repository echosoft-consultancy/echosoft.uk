<template>
  <b-container class="resume">
    <b-row class="overflow-auto">
      <b-col cols="4" class="centering left-bar">
          <contact />
          <skills />
      </b-col>
      <b-col cols="8" class="centering">
        <about />
        <experience />
        <projects />
        <references />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Contact from './resume/Contact'
import Experience from './resume/Experience'
import Skills from './resume/Skills'
import Projects from './resume/Projects'
import References from './resume/References'
import About from './About'
export default {
  name: 'Resume',
  components: {
    Contact,
    Experience,
    Skills,
    Projects,
    References,
    About
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #28364f !important;
}
.link {
  color: #28364f !important;
}
.centering {
  padding-top: 5vh;
}
.resume {
  background-color: #FCFEFF;
}
.left-bar {
  background-color: #e5e7e75d;
}
</style>
