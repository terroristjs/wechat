<template>
<router-link tag="div" class="cell" :to="to">
  <div class="left">
    <slot></slot>
  </div>
  <div class="right" :class="{border:isBorder}">
    <div class="up">
      <div class="title" v-text=title></div>
      <div class="time" v-text=time :class="up_icon"></div>
    </div>
    <div class="down">
      <div class="content" v-text=content></div>
      <div class="tag" v-text=tag :class="down_icon"></div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'Cell',
  props: ['title', 'content', 'time', 'tag', 'to', 'isBorder', 'up_icon', 'down_icon']
}
</script>
<style lang="less" scoped>
.cell {
  background-color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
  }
  .right {
    &.border {
      border-bottom: 1px solid rgba(209, 209, 209, 0.384);
      }
    color: #ccc;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
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
