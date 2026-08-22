import Vue from 'vue'
import App from './App'
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/vendors/scrolloverflow'
import './assets/css/custom.scss'
import VueAnalytics from 'vue-analytics'

Vue.use(VueFullPage)
Vue.use(VueAnalytics, {
  id: 'UA-144541124-1',
  autoTracking: {
    screenview: true,
    untracked: false
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
