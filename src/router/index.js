import Vue from 'vue'
import VueRouter from 'vue-router'
import Weixin from '../views/Weixin.vue'
import Concact from '../views/Concact.vue'
import Find from '../views/Discover.vue'
import Me from '../views/Me.vue'
import Login from '../components/Login.vue'
import Setting from '../components/Setting.vue'
import Chat from '../components/Chat.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/weixin'
  },
  {
    path: '/weixin',
    name: 'weixin',
    component: Weixin
  },
  {
    path: '/concact',
    name: 'concact',
    component: Concact
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]

const router = new VueRouter({
  routes
})

export default router
