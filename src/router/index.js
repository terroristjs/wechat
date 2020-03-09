import Vue from 'vue'
import VueRouter from 'vue-router'
import Weixin from '../views/Weixin.vue'
const Concact = () => import('../views/Concact.vue')
const Discover = () => import('../views/Discover.vue')
const Me = () => import('../views/Me.vue')
const Chat = () => import('../components/Chat.vue')
const Login = () => import('../components/Login.vue')
const Setting = () => import('../components/Setting.vue')
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
    path: '/discover',
    name: 'discover',
    component: Discover
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
