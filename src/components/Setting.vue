<template>
  <div class="container">
    <cell v-for="item in list" isBorder="true" :key= item.id :title= item.title to="/" up_icon="iconfont icon-arrow-right"></cell>
    <div class="exit" @click= logout>切换账号</div>
    <div class="exit" @click="sheetVisible = !sheetVisible">退出</div>
    <!-- <mt-actionsheet :actions="sheetlist" v-model="sheetVisible"></mt-actionsheet> -->
    <sheet :list="sheetlist" :value="sheetVisible"></sheet>
  </div>
</template>

<script>
import Sheet from '../lib/Sheet'
export default {
  components: {
    Sheet
  },
  data () {
    return {
      sheetVisible: false,
      sheetlist: [
        { name: '退出登录', method: this.logout },
        { name: '关闭微信', method: this.close }
      ],
      list: [
        { id: 1, title: '账号与安全', path: '/safty' },
        { id: 2, title: '新消息提醒', path: '/newmessage' },
        { id: 3, title: '勿扰模式', path: '/disturb' },
        { id: 4, title: '聊天', path: '/chat' },
        { id: 5, title: '隐私', path: '/privacy' },
        { id: 6, title: '通用', path: '/general' },
        { id: 7, title: '关于微信', path: '/aboult' },
        { id: 8, title: '帮助与反馈', path: '/help' },
        { id: 9, title: '插件', path: '/plugins' }
      ]

    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    close () {
      location.href = 'about:blank'
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  .exit {
    line-height: 55px;
    border-top: 8px solid rgb(238, 238, 238);
    background-color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .cell {
    height: 53px;
    margin-left: -16px;
  }
}
</style>
