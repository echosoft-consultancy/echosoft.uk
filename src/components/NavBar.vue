<template>
  <div>
    <nav class="navbar navbar-dark">
      <a href="#" class="navbar-brand brand">echosoft</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scss" scoped>
.navbar {
  background-color: #28364f !important;
  border-color: #e7e7e7;
  border-style: solid;
  border-width: 0 0 1px;
  font-family: 'Poiret One','Helvetica Neue', Helvetica, Arial, sans-serif, cursive !important;
}
.brand {
  font-weight: 700;
  font-size: 30px;
}
</style>
