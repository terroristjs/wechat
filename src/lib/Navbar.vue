<template>
  <div class="navbar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="mid">
        <slot name="mid"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="less" scoped>
.navbar {
  z-index: 10;
  height: 49px;
  width: 100%;
  background-color: rgb(238, 238, 238);
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  .left {
    display: flex;
    margin-left: 18px;
    font-size: 18px;
  }
  .mid {
      flex: 1;
      text-align: center;
  }
  .right {
    i {
      margin-right: 18px;
      margin-left: 18px;
    }
  }
}
</style>
