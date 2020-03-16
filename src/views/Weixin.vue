<template>
  <div class="container">
  <cell class="cell" v-for="item in list" :key="item.id" :title= item.title :content=item.content
  :to="{ name: 'chat', params: { id: item.title }}" isBorder="true" time="13:14"
  down_icon="iconfont icon-Sound-Off">
      <img :src= item.src>
    </cell>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 1, title: '茜媛1', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 2, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 3, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
        { id: 4, title: '茜媛', content: '你怎么那么美', src: require('../assets/xi.png') },
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
.container{
  padding-top: 49px;
  padding-bottom: 60px;
  .cell {
     padding-right: 8px;
    img {
     border-radius: 12%;
     width: 50px;
     height: 50px;
    }
  }
}
</style>
