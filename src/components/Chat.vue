<template>
<div class="container">
  <mt-header fixed>
    <router-link to="/weixin" slot="left">
      <mt-button icon="back">{{this.$route.query.id}}</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <div class="main">
    <div class="cell" v-for="(item,index) in messageList" :key=index>
      <span>{{item}}</span>
      <img src="../assets/ic_qr_code.png">
    </div>
  </div>
  <div class="tab" :class="{ fixed:!showMore }">
    <i :class="{ 'iconfont icon-icon-test2':swich, 'iconfont icon-icon-test1':!swich }" @click="swich=!swich"></i>
    <input type="text" v-model="message"/>
    <i class="iconfont icon-smile_line" @click="showMore=!showMore"></i>
    <i v-show="message==''" class="iconfont icon-add" @click="showMore=!showMore"></i>
    <button v-show="message!==''" class="send" :disabled="message==''" @mousedown.prevent="messageList.push(message)">发送</button>
  </div>
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
</div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      swich: false,
      messageList: ['开心', '很开心'],
      showMore: false
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding-top: 50px;
  padding-bottom: 60px;
  background-color: rgb(238, 238, 238);
  .more {
    background: rgb(247, 247, 247);
    height: 250px;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    span {
      font-size: 30px;
      margin: 20px;
      padding: 15px;
      background: #fff;
      border-radius: 15%;
    }
  }
  .mint-header {
    height: 50px;
    line-height: 50px;
    background-color: rgb(238, 238, 238);
    .mint-button {
      color: #000;
      font-size: 18px;
      line-height: 50px;
      margin-right: 10px;
    }
  }
  .main {
    background-color: rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
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
  .tab {
    &.fixed {
      bottom: 0px;
    }
    position: fixed;
    bottom: 250px;
    left: 0;
    background: rgb(247, 247, 247);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 1px solid rgb(221, 221, 221);
    input {
      height: 40px;
      width: 50%;
      border: 0;
      font-size: 20px;
      padding: 0px 10px;
      caret-color: rgb(57, 224, 42);
      color: rgb(0, 0, 0);
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
</style>
