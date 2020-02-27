<template>
  <div class="container">
    <mt-cell v-for="item in list" :key= item.id :title= item.title :label= item.content is-link
    :to= "{ name: 'chat', query: { id: item.title }}">
    <span>下午5:50</span>
    <img slot="icon" :src= item.src width="44" height="44">
  </mt-cell>
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
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 60px;
  .mint-cell {
    padding: 10px;
   img {
     border-radius: 12%;
     float: left;
     margin-right: 8px;
     margin-top: -5px;
   }
    span {
     font-size: 12px;
     padding-bottom: 20px;
    }
  }
}
</style>
