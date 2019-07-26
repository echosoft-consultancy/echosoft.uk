<template>
  <div>
    <full-page :options="options" ref="fullpage">
      <div class="section" v-bind:style="bgi">
        <home />
      </div>
      <div class="section" v-bind:style="bgc">
        <about />
      </div>
      <div class="section" v-bind:style="bgc">
        <resume />
      </div>
    </full-page>
    <div id="footer">Footer</div>
  </div>
</template>

<script>

import Home from './components/Home.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'

export default {
  name: 'Echosoft',
  components: {
    Home,
    About,
    Resume
  },
  data: function () {
    return {
      bgc: {
        'background-color': '#89AAB5'
      },
      bgi: {
        'background-image': 'url(' + require('./assets/images/galaxy.jpg') + ')',
        'background-size': 'cover',
        'background-position': 'center'
      },
      options: {
        controlArrows: true,
        anchors: ['/home', '/about', '/resume'],
        scrollOverflow: true
      }
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap');
html, body {
  font-family: 'Darker Grotesque','Helvetica Neue', Helvetica, Arial, sans-serif, cursive;
}
p {
  color: #28364f;
}

#footer {
  position:fixed;
  height: 50px;
  display:block;
  width: 100%;
  background: #333;
  z-index:9;
  text-align:center;
  color: #f2f2f2;
  padding: 20px 0 0 0;
}

.card {
  background-color: white;
  padding: 15px;
  margin-bottom: 20px;
  border: 0px;

}
</style>
