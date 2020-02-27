<template>
  <div class="container">
    <mt-header fixed v-show= isShow>
      <span slot="left">{{ selected | trans }}</span>
      <mt-button icon="search" slot="right"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="main">
        <keep-alive>
          <router-view/>
        </keep-alive>
    </div>
    <mt-tabbar v-model="selected" fixed v-show= tabShow>
        <mt-tab-item id="weixin">
          <img v-show="!(selected == 'weixin')" slot="icon" src="./assets/ic_weixin_normal.png">
          <img v-show="(selected == 'weixin')" slot="icon" src="./assets/ic_weixin_selected.png">
          微信
        </mt-tab-item>
        <mt-tab-item id="concact">
          <img v-show="!(selected == 'concact')" slot="icon" src="./assets/ic_contacts_normal.png">
          <img v-show="(selected == 'concact')" slot="icon" src="./assets/ic_contacts_selected.png">
          通讯录
        </mt-tab-item>
        <mt-tab-item id="find">
          <img v-show="!(selected == 'find')" slot="icon" src="./assets/ic_find_normal.png">
          <img v-show="(selected == 'find')" slot="icon" src="./assets/ic_find_selected.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="me">
          <img v-show="!(selected == 'me')" slot="icon" src="./assets/ic_me_normal.png">
          <img v-show="(selected == 'me')" slot="icon" src="./assets/ic_me_selected.png">
          我
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'weixin'
    }
  },
  filters: {
    trans (val) {
      const obj = { weixin: '微信', concact: '通讯录', find: '发现', me: '我' }
      return obj[val]
    }
  },
  watch: {
    selected () {
      this.$router.push({ 'path': '/' + this.selected })
    }
  },
  computed: {
    isShow () {
      return this.$route.path === '/weixin' ||
      this.$route.path === '/concact' ||
      this.$route.path === '/find'
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
  .mint-header {
    z-index: 10;
    height: 50px;
    line-height: 50px;
    background-color: rgb(238, 238, 238);
    span {
      font-size: 18px;
      color: #000;
    }
    .mint-button {
      margin: 20px;
      color: #000;
    }
  }
  .main {
    overflow: hidden;
  }
  .mint-tabbar {
    .mint-tab-item.is-selected {
      background-color: transparent;
      color:#45C018;
    }
  }
}
</style>
