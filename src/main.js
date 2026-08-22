import { createApp } from 'vue'
import { configure } from 'vue-gtag'
import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'
import 'vue-fullpage.js/dist/style.css'
import './assets/css/custom.scss'

configure({
  tagId: 'UA-144541124-1'
})

const app = createApp(App)
app.use(VueFullPage)
app.mount('#app')
