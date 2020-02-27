<template>
  <div class="container">
    <h2>{{ !loginWay?'手机号登录':'微信号/QQ号/邮箱登录' }}</h2>
    <mt-field v-show= loginWay label="账号" placeholder="请填写微信号/QQ号/邮箱" v-model= username></mt-field>
    <mt-field v-show= loginWay label="密码" placeholder="请填写密码" type="password" v-model= password></mt-field>
    <mt-field v-show= !loginWay label="手机号" type="number" :state= "rightPhone?'success':''" placeholder="请填写手机号" v-model= phone></mt-field>
    <mt-field v-show= !loginWay label="验证码" placeholder="请填写验证码" v-model= code>
       <button :disabled= "!rightPhone || time != 0" @click= getCode>{{ time === 0?codeContent:`(${this.time})已发送` }}</button>
    </mt-field>
    <p @click= "loginWay= !loginWay">{{ loginWay?'用手机号登录':'用微信号/QQ号/邮箱登录' }}</p>
    <mt-button :disabled= "false" type="primary" size="large" @click= login>登录</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      loginWay: false,
      phone: '',
      code: '',
      codeContent: '点击发送验证码',
      time: 0
    }
  },
  methods: {
    getCode () {
      if (this.time === 0) {
        this.time = 30
        const intervalId = setInterval(() => {
          this.time--
          if (this.time <= 0) {
            clearInterval(intervalId)
          }
        }, 1000)
      }
    },
    login () {
      this.$router.push('/me')
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  font-size: 18px;
  padding: 20px 20px;
  .mint-field {
    height: 60px;
  }
  p {
    color: rgb(91, 129, 231);
    margin-left: 10px;
  }
  .mint-button {
    margin-top: 60px;
    height: 50px;
    background-color: rgb(77, 197, 77);
  }
}
h2 {
  padding: 20px 5px;
}
</style>
