<template>
  <div class="container">
    <navbar v-show= isShow>
      <span slot="left">{{ title }}</span>
      <i slot="right" class="iconfont icon-icon-test"></i>
      <i slot="right" class="iconfont icon-addto"></i>
    </navbar>
    <div class="main">
        <keep-alive>
          <router-view/>
        </keep-alive>
    </div>
    <tabbar v-show="tabShow"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import Navbar from './lib/Navbar'
export default {
  components: {
    Tabbar,
    Navbar
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
.container {
  height: 100%;
  background-color: rgb(238, 238, 238);
  .main {
    overflow: hidden;
  }
}
</style>
