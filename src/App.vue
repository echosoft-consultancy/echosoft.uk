<template>
  <div>
    <full-page id="fullpage" :options="options" ref="fullpage">
      <div class="section hero-section" :style="heroVars">
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
import { pageview } from 'vue-gtag'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import heroJpg from './assets/images/galaxy.jpg'
import heroJpgSmall from './assets/images/galaxy-1280.jpg'
import heroWebp from './assets/images/galaxy.webp'
import heroWebpSmall from './assets/images/galaxy-1280.webp'

export default {
  name: 'Echosoft',
  components: {
    Home,
    Resume
  },
  data: function () {
    return {
      heroVars: {
        '--hero-jpg': 'url(' + heroJpg + ')',
        '--hero-jpg-small': 'url(' + heroJpgSmall + ')',
        '--hero-webp': 'url(' + heroWebp + ')',
        '--hero-webp-small': 'url(' + heroWebpSmall + ')'
      },
      options: {
        licenseKey: 'gplv3-license',
        controlArrows: true,
        anchors: ['/home', '/about', '/resume'],
        scrollOverflow: true,
        afterLoad: (origin, destination) => {
          if (destination && destination.anchor) {
            pageview(destination.anchor)
          }
        },
        scrollBar: false
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/print.css';

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
  background-color: #0b1220;
  background-image: image-set(
    var(--hero-webp-small) type('image/webp'),
    var(--hero-jpg-small)
  );
  background-size: cover;
  background-position: center;
}

@media (min-width: 1280px) {
  .hero-section {
    background-image: image-set(
      var(--hero-webp) type('image/webp'),
      var(--hero-jpg)
    );
  }
}

.resume-section {
  background-color: #89AAB5;
}
</style>
