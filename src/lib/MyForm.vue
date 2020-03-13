<template>
  <div class="my-form">
    <div class="title" v-text="label"></div>
    <input v-model="val" :placeholder="placeholder" :type="type">
    <i v-show="val" class="iconfont icon-reeor-fill clear" @click="val=''"></i>
    <i :class="tag"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'placeholder', 'state'],
  data () {
    return {
      val: ''
    }
  },
  computed: {
    tag () {
      if (this.state === 'success') return 'iconfont icon-smile_line'
      else if (this.state === 'fail') return 'iconfont icon-reeor-fill'
      else return ''
    }
  },
  watch: {
    val (newval) {
      this.$emit('input', newval)
    }
  }
}
</script>

<style lang="less" scoped>
.my-form {
  padding: 0 10px;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
  align-items: center;
  .title {
    width: 80px;
    font-size: 16px;
  }
  input {
    border: none;
    font-size: 16px;
    outline: none;
    flex: 1;
  }
  .clear{
    color: #ccc;
    font-size: 20px;
  }
}
</style>
