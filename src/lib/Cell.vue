<template>
<router-link tag="div" class="cell" :to="to">
  <div class="left">
    <slot></slot>
  </div>
  <div class="right" :class="{border:isBorder}">
    <div class="up">
      <div class="title" v-text=title></div>
      <div class="time" v-text=time></div>
    </div>
    <div class="down">
      <div class="content" v-text=content></div>
      <div class="tag" v-text=tag></div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'Cell',
  props: ['title', 'content', 'time', 'tag', 'to', 'isBorder']
}
</script>
<style lang="less" scoped>
.cell {
  background-color: #fff;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
  .right {
    &.border {
      border-bottom: 1px solid #ddd;
      }
    color: #ccc;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    justify-content: center;
    height: 100%;
    font-size: 12px;
    flex: 1;
    overflow: hidden;
    .up {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 20px;
        color: #000;
      }
    }
    .down {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
