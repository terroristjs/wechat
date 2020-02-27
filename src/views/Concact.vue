<template>
  <div class="container">
    <mt-cell v-for="item in list" :key= item.id :title= item.title is-link>
    <img slot="icon" :src= item.src width="44" height="44">
  </mt-cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 1, title: '新的朋友', content: '你怎么那么美', src: require('../assets/ic_new_friends.png') },
        { id: 2, title: '群聊', content: '你怎么那么美', src: require('../assets/ic_group_chat.png') },
        { id: 3, title: '标签', content: '你怎么那么美', src: require('../assets/ic_tag.png') },
        { id: 4, title: '公众号', content: '你怎么那么美', src: require('../assets/ic_common.png') },
        { id: 5, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 6, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 7, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 9, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 10, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 11, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 12, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 13, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 14, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 15, title: '茜媛15', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 16, title: '茜媛16', content: '你怎么那么美', src: require('../assets/xi.png') }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 60px;
  .mint-cell {
    padding: 6px;
   img {
     border-radius: 12%;
     margin: 10px 15px 0px 5px;
   }
 }
}
</style>
