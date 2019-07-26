<template>
  <div>
    <nav-bar />
    <b-container>
      <b-row class="text-center" v-bind:style="{ marginTop: '55vh' }" align-h="center">
        <b-col cols="6">
        <h1 class="logo"><a href="mailto:website@echosoft.uk">echosoft</a></h1>
        </b-col>
      </b-row>
      <b-row class="text-center" align-h="center">
        <b-col cols="6">
        <h5 class="slogan"><strong>Manufacturing software that is out of this world.</strong></h5>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: 'Poiret One','Helvetica Neue', Helvetica, Arial, sans-serif, cursive;
}
.logo {
  font-size: 4rem;
  opacity: 0.6;
}
.logo > a {
  color: white;
}
.slogan {
  color: white;
  opacity: 0.6;
}
</style>
