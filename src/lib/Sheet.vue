<template>
  <div v-show="show" class="container" @click="show=false">
    <div class="footer">
      <div class="sheetlist" v-for="item in list" :key="item.name" v-text="item.name" @click="item.method"></div>
      <div class="cancel" @click="show=false">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'value'],
  data () {
    return {
      show: false
    }
  },
  watch: {
    value () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  top: 0;
  background-color: rgba(143, 143, 143, 0.3);
  position: fixed;
  height: 100%;
  width: 100%;
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    .sheetlist {
      line-height: 50px;
      font-size: 18px;
      border-bottom: 1px solid #f6f6f6;
    }
    .cancel {
      border-top: 8px solid #f6f6f6;
      line-height: 50px;
      font-size: 18px;
    }
  }
}
</style>
