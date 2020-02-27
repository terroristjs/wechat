<template>
  <div class="container">
    <mt-cell v-for="item in list" :key= item.id :title= item.title is-link></mt-cell>
    <mt-button type="default" size="large" @click.native= logout>切换账号</mt-button>
    <mt-button type="default" size="large" @click.native= 'sheetVisible = true'>退出</mt-button>
    <mt-actionsheet :actions="sheetlist" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sheetVisible: false,
      sheetlist: [
        { name: '退出登录', method: this.logout },
        { name: '关闭微信', method: this.logout }
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
    }
  }
}
</script>

<style lang="less" scoped>
.mint-cell {
  margin-bottom: 5px;
}
</style>
