<template>
<div class="container">
  <mt-cell title="朋友圈" is-link>
    <img slot="icon" src="../assets/ic_friends_circle.png" width="30" height="30">
  </mt-cell>
  <mt-cell title="扫一扫" is-link>
    <img slot="icon" src="../assets/ic_scan.png" width="30" height="30">
  </mt-cell>
  <mt-cell title="小程序" is-link>
    <img slot="icon" src="../assets/ic_program.png" width="30" height="30">
  </mt-cell>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  margin-top: 50px;
  margin-bottom: 60px;
  width: 100%;
}
.mint-cell {
  border-bottom: 10px solid rgb(238, 238, 238);
}
img {
  padding: 8px;
}
span {
     font-size: 12px;
     padding-bottom: 20px;
  }
</style>
