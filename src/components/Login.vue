<template>
  <div class="container">
    <h2>{{ !loginWay?'手机号登录':'微信号/QQ号/邮箱登录' }}</h2>
    <my-form v-show= loginWay label="账号" placeholder="请填写微信号/QQ号/邮箱" v-model= username></my-form>
    <my-form v-show= loginWay label="密码" placeholder="请填写密码" type="password" v-model= password></my-form>
    <my-form v-show= !loginWay label="手机号" type="number" :state= "rightPhone?'success':''"
    placeholder="请填写手机号" v-model= phone></my-form>
    <my-form v-show= !loginWay label="验证码" placeholder="请填写验证码" v-model= code>
       <button class="codebutton" :disabled= "!rightPhone || time != 0" @click= getCode>{{ time === 0?codeContent:`(${this.time})已发送` }}</button>
    </my-form>
    <p @click= "loginWay= !loginWay">{{ loginWay?'用手机号登录':'用微信号/QQ号/邮箱登录' }}</p>
    <button class="loginbutton" @click="login">登录</button>
  </div>
</template>

<script>
import MyForm from '../lib/MyForm'
export default {
  components: {
    MyForm
  },
  data () {
    return {
      content: '',
      username: '',
      password: '',
      loginWay: false,
      phone: '',
      code: '',
      codeContent: '获取验证码',
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
  p {
    color: rgb(91, 129, 231);
    margin-left: 10px;
  }
  h2 {
  padding: 20px 5px;
}
  .my-form {
    height: 60px;
    .codebutton {
      width: 49px;
      padding: 0;
      margin-right: -8px;
    }
  }
  .loginbutton {
    width: 100%;
    background-color: rgb(55, 214, 95);
    color: #fff;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
  }
}
</style>
