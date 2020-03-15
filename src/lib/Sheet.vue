<template>
  <div v-show="show" class="container" @click="show=false">
    <transition name="footer">
      <div class="footer" v-show="show">
        <div class="sheetlist" v-for="item in list" :key="item.name" v-text="item.name" @click="item.method"></div>
        <div class="cancel" @click="show=false">取消</div>
      </div>
    </transition>
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
.footer-enter-active,
.footer-leave-active {
  transition: all 0.3s ease;
}
.footer-enter,
.footer-leave-to {
  transform: translateY(100%);
}
.container {
  text-align: center;
  top: 0;
  background-color: rgba(59, 59, 59, 0.6);
  position: fixed;
  height: 100%;
  width: 100%;
  .footer {
    border-radius: 10px;
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
