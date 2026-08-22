<template>
  <div class="container resume">
    <div class="row overflow-auto">
      <div class="col-4 centering left-bar">
          <contact />
          <skills />
      </div>
      <div class="col-8 centering">
        <about />
        <experience />
        <projects />
        <references />
      </div>
    </div>
  </div>
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
