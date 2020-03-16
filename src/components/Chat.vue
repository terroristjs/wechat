<template>
<div class="container">
  <navbar>
    <i slot="left" class="iconfont icon-arrow-lift" @click="$router.go(-1)"></i>
    <span slot="left">{{$route.params.id}}</span>
    <i slot="right" class="iconfont icon-ellipsis"></i>
  </navbar>
  <div class="main" ref="main">
    <div class="cell" v-for="(item,index) in messageList" :key=index>
      <span>{{item}}</span>
      <img src="../assets/ic_qr_code.png">
    </div>
  </div>
  <div class="footer">
    <div class="tab">
      <i :class="{ 'iconfont icon-icon-test2':swich, 'iconfont icon-icon-test1':!swich }" @click="swich=!swich"></i>
      <input type="text" v-model="message" @focus="showMore=false"/>
      <i class="iconfont icon-smile_line" @click="showMore=!showMore"></i>
      <i v-show="message==''" class="add iconfont icon-addto" @click="showMore=!showMore"></i>
      <button v-show="message!==''" class="send" :disabled="message==''" @mousedown.prevent="send">发送</button>
    </div>
    <transition name="more">
    <div class="more" v-show="showMore">
      <span class="iconfont icon-smile_line"></span>
      <span class="iconfont icon-smile_line"></span>
      <span class="iconfont icon-smile_line"></span>
      <span class="iconfont icon-smile_line"></span>
      <span class="iconfont icon-smile_line"></span>
      <span class="iconfont icon-smile_line"></span>
      <span class="iconfont icon-smile_line"></span>
      <span class="iconfont icon-smile_line"></span>
    </div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      message: '',
      swich: false,
      messageList: ['开心', '很开心'],
      showMore: false
    }
  },
  methods: {
    send () {
      this.messageList.push(this.message)
      // setTimeout(() => {
      //   this.$refs.main.scrollTop = this.$refs.main.scrollHeight
      // }, 1)
      this.$nextTick(() => {
        this.$refs.main.scrollTop = this.$refs.main.scrollHeight
        console.log(this)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.chat-enter-active,.more-enter-active,.more-leave-active,
.chat-leave-active {
  transition: all 0.2s ease;
}
.chat-enter,
.chat-leave-to {
  transform: translateX(100%);
}
.more-enter,
.more-leave-to {
  transform: translateY(100%);
}
.container {
  padding-top: 50px;
  padding-bottom: 60px;
  background-color: rgb(238, 238, 238);
  .navbar {
    span {
      margin:0 10px;
    }
  }
  .main {
    background-color: rgb(238, 238, 238);
    .cell {
      margin: 2px;
      height: 53px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        background: rgb(137, 238, 55);
        border-radius: 5px;
        padding: 10px;
      }
      img {
        margin: 0 20px;
        height: 42px;
        width: 42px;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: rgb(247, 247, 247);
    .more {
      height: 230px;
      display: flex;
      width: 100%;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
      span {
        font-size: 30px;
        margin: 3%;
        padding: 15px;
        background: #fff;
        border-radius: 15%;
      }
    }
    .tab {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 60px;
      border: 1px solid rgb(221, 221, 221);
      input {
        border: none;
        height: 40px;
        width: 50%;
        outline: none;
        font-size: 20px;
        padding: 0px 10px;
        caret-color: rgb(57, 224, 42);
        color: rgb(0, 0, 0);
      }
        .add {
          font-size: 40px;
        }
      i {
        font-size: 30px;
      }
      .send {
        background: rgb(57, 224, 42);
        border-radius: 5px;
        width: 65px;
        height: 35px;
        border: 0;
        color: #fff;
        font-size: 18px;
      }
    }
  }
}
</style>
