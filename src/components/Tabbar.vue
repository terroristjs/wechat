<template>
  <tabbar class="tabbar">
    <tabbar-item to="/weixin" activeColor="#45C018">
      <img slot="icon" src="../assets/ic_weixin_normal.png">
      <img slot="icon-active" src="../assets/ic_weixin_selected.png">
      <span slot="content">微信</span>
    </tabbar-item>
    <tabbar-item to="/concact" activeColor="#45C018">
      <img slot="icon" src="../assets/ic_contacts_normal.png">
      <img slot="icon-active" src="../assets/ic_contacts_selected.png">
      <span slot="content">通讯录</span>
    </tabbar-item>
    <tabbar-item to="/discover" activeColor="#45C018">
      <img slot="icon" src="../assets/ic_find_normal.png">
      <img slot="icon-active" src="../assets/ic_find_selected.png">
      <span slot="content">发现</span>
    </tabbar-item>
    <tabbar-item to="/me" activeColor="#45C018">
      <img slot="icon" src="../assets/ic_me_normal.png">
      <img slot="icon-active" src="../assets/ic_me_selected.png">
      <span slot="content">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from '../lib/Tabbar'
import TabbarItem from '../lib/TabbarItem'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less" scoped>
.tabbar {
  img {
    width: 26px;
    height: 26px;
  }
}
</style>
