import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import './assets/css/global.css'
import 'mint-ui/lib/style.css'
import './assets/icon/iconfont.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
