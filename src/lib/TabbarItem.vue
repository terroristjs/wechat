<template>
  <div id="tabbar-item" :style="activeStyle" @click="go">
    <div v-show="!isActive" class="icon">
      <slot name="icon"></slot>
    </div>
    <div v-show="isActive" class="icon">
      <slot name="icon-active"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    to: String,
    activeColor: null
  },
  data () {
    return {

    }
  },
  methods: {
    go () {
      if (this.isActive) return
      this.$router.push(this.to)
    }
  },
  computed: {
    isActive () {
      return this.$route.path === this.to
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>
<style lang="less" scoped>
#tabbar-item {
  padding: 5px;
  text-align: center;
  flex: 1;
  font-size: 12px;
}
</style>
