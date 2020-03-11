<template>
<div class="container">
  <div class="iconfont icon-photobzhaoxiang photo"></div>
  <cell class="header" title="明明" content="微信号: terroristjs" to="/">
    <img src="../assets/ic_emoji.png" >
  </cell>
  <cell isBorder="true" class="main" v-for="item in list" :key= item.id
  up_icon="iconfont icon-arrow-right" :title= item.title  :to= item.path>
    <img :src= item.src class="main-img">
  </cell>
</div>
</template>

<script>
export default {

  data () {
    return {
      list: [
        { id: 1, title: '支付', path: '/pay', src: require('../assets/ic_wallet.png') },
        { id: 2, title: '收藏', path: '/collection', src: require('../assets/ic_collect.png') },
        { id: 3, title: '相册', path: '/album', src: require('../assets/ic_gallery.png') },
        { id: 4, title: '卡包', path: '/card', src: require('../assets/ic_kabao.png') },
        { id: 5, title: '相册', path: '/album', src: require('../assets/ic_emoji.png') },
        { id: 6, title: '设置', path: '/setting', src: require('../assets/ic_settings.png') }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  .photo {
    line-height: 49px;
    background-color: #ffffff;
    text-align: end;
    padding-right: 15px;
  }
  .header {
    height: 90px;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .main {
    height: 60px;
    .main-img {
      width: 35px;
      height: 35px;
    }
 }
}
</style>
