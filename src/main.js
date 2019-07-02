// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueFullPage from 'vue-fullpage.js'
import BootstrapVue from 'bootstrap-vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/custom.scss'
import Skills from './components/Skills.vue'
import SkillsInfo from './components/SkillsInfo.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueFullPage)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Skills,
      children: [
        {
          path: '/about/:id?',
          component: SkillsInfo,
          props: true,
          alias: '/home/'
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
  template: '<App/>'
})
