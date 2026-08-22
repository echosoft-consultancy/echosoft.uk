<template>
  <div>
    <full-page id="fullpage" :options="options" ref="fullpage">
      <div class="section hero-section">
        <picture class="hero-bg">
          <source
            type="image/webp"
            :srcset="heroWebpSmall + ' 1280w, ' + heroWebp + ' 1920w'"
            sizes="100vw"
          >
          <img
            class="hero-bg-img"
            :src="heroJpg"
            :srcset="heroJpgSmall + ' 1280w, ' + heroJpg + ' 1920w'"
            sizes="100vw"
            width="1920"
            height="1080"
            alt=""
            fetchpriority="high"
            decoding="async"
          >
        </picture>
        <home />
      </div>
      <div class="section resume-section">
        <resume />
      </div>
    </full-page>
    <div id="footer">Footer</div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'

export default {
  name: 'Echosoft',
  components: {
    Home,
    Resume
  },
  data: function () {
    return {
      heroJpg: require('./assets/images/galaxy.jpg'),
      heroJpgSmall: require('./assets/images/galaxy-1280.jpg'),
      heroWebp: require('./assets/images/galaxy.webp'),
      heroWebpSmall: require('./assets/images/galaxy-1280.webp'),
      options: {
        controlArrows: true,
        anchors: ['/home', '/about', '/resume'],
        scrollOverflow: true,
        afterLoad: (origin, destination, direction) => this.$ga.page(destination.anchor),
        scrollBar: false
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/css/print.css';

html, body {
  font-family: 'Darker Grotesque','Helvetica Neue', Helvetica, Arial, sans-serif, cursive !important;
}

p {
  color: #28364f;
}

#footer {
  position: fixed;
  height: 50px;
  display: block;
  width: 100%;
  background: #333;
  z-index: 9;
  text-align: center;
  color: #f2f2f2;
  padding: 20px 0 0 0;
}

.card {
  background-color: white;
  padding: 15px;
  margin-bottom: 20px;
}

.hero-section {
  position: relative;
  background-color: #0b1220;
}

.hero-bg,
.hero-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-bg-img {
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}

.hero-section > *:not(.hero-bg) {
  position: relative;
  z-index: 1;
}

.resume-section {
  background-color: #89AAB5;
}
</style>
