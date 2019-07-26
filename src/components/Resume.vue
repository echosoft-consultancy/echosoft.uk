<template>
  <b-container class="resume">
    <b-row class="overflow-auto">
      <b-col cols="4" class="centering">
        <div class="text-center">
          <img class="profile-pic" src="../assets/images/bio.jpg" />
          <h1>Ben Jefferies</h1>
          <h5 >DevOps Engineer</h5>
        </div>
          <contact />
          <skills />
      </b-col>
      <b-col cols="8" class="centering">
        <experience />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Contact from './resume/Contact'
import Experience from './resume/Experience'
import Skills from './resume/Skills'
export default {
  name: 'Resume',
  components: {
    Contact,
    Experience,
    Skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #28364f !important;
}
.link {
  font-family: 'Helvetica Neue", Helvetica, Arial, sans-serif;';
  color: #28364f !important;
}
* {
  font-family: 'Helvetica Neue", Helvetica, Arial, sans-serif, cursive;';
}
.centering {
  padding-top: 5vh;
}
.resume {
  background-color: #FCFEFF;
}
.profile-pic {
  height: 200px;
  widows: 200px;
}
</style>
