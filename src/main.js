import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './assets/icon/iconfont.css'
import Cell from './lib/Cell'
import Navbar from './lib/Navbar'
Vue.component('Cell', Cell)
Vue.component('Navbar', Navbar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
