<template>
<div class="container">
  <mt-button icon="success"></mt-button>
  <img class="head" src="../assets/ic_emoji.png" >
  <div class="name">明明</div>
  <div class="rapper">微信号:
    <label class="id">terroristjs</label>
    <img src="../assets/ic_qr_code.png">
  </div>
  <mt-cell v-for="item in list" :key= item.id :title= item.title is-link :to= item.path>
    <img slot="icon" :src= item.src width="30" height="30">
  </mt-cell>
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
  .rapper {
    color: rgb(165, 165, 165);
    margin-bottom: 35px;
    img {
      padding-left: 110px;
      width: 20px;
      height: 20px;
      position: relative;
      top: 5px;
    }
    .id {
      margin-left: 20px;
    }
  }
  .head {
    margin: 5px 10px 5px 10px;
    float: left;
  }
  .name {
    margin: 15px 0 5px 100px;
    font-size: 22px;
  }
  .mint-button {
    background: #fff;
    left: 350px;
    top: 10px;
    display: block;
  }
}
.mint-cell {
  padding: 6px;
  img {
    padding-right: 15px;
  }
}
</style>
