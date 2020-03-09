<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>
<style lang="less" scoped>
#tabbar {
  height: 55px;
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
}

</style>
