<template>
  <div class="container">
    <transition name="chat">
    <navbar v-show= isShow>
      <span slot="left">{{ title }}</span>
      <i slot="right" class="iconfont icon-icon-test"></i>
      <i slot="right" class="iconfont icon-addto"></i>
    </navbar>
    </transition>
    <div class="main">
      <transition name="chat">
        <keep-alive exclude="chat">
          <router-view/>
        </keep-alive>
      </transition>
    </div>
    <transition name="chat">
      <tabbar v-show="tabShow"></tabbar>
    </transition>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  components: {
    Tabbar
  },
  computed: {
    title () {
      const obj = { '/weixin': '微信', '/concact': '通讯录', '/discover': '发现' }
      return obj[this.$route.path]
    },
    isShow () {
      return this.$route.path === '/weixin' ||
      this.$route.path === '/concact' ||
      this.$route.path === '/discover'
    },
    tabShow () {
      return this.isShow || this.$route.path === '/me'
    }
  }
}
</script>

<style lang="less" scoped>
.chat-enter-active,
.chat-leave-active {
  transition: all 1s ease;
}
.chat-enter,
.chat-leave-to {
  transform: translateX(-100%);
}
.container {
  height: 100%;
  background-color: rgb(238, 238, 238);
}
</style>
