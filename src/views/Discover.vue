<template>
<div class="container">
  <cell class="cell" title="朋友圈" to='/frind' up_icon="iconfont icon-arrow-right">
    <img src="../assets/ic_friends_circle.png">
  </cell>
  <cell class="cell" title="扫一扫" to='/frind' up_icon="iconfont icon-arrow-right">
    <img src="../assets/ic_scan.png">
  </cell>
  <cell class="cell" title="小程序" to='/frind' up_icon="iconfont icon-arrow-right">
    <img src="../assets/ic_program.png">
  </cell>
</div>
</template>

<script>
export default {
  data () {
    return {
      icon: '<i class="iconfont icon-arrow-right">'
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  margin-top: 49px;
  margin-bottom: 60px;
  width: 100%;
}
.cell {
  height: 60px;
  border-bottom: 10px solid rgb(238, 238, 238);
}
img {
  width: 30px;
  height: 30px;
}
</style>
