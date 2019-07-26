<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="brand">echosoft</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item @click="scrollDown()">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    scrollDown: () => {
      console.log('test')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scss" scoped>
.navbar {
  background-color: #28364f !important;
  border-color: #e7e7e7;
  border-style: solid;
  border-width: 0 0 1px;
  font-family: 'Poiret One','Helvetica Neue', Helvetica, Arial, sans-serif, cursive;
}
.brand {
  font-weight: 700;
  font-size: 30px;
}
</style>
