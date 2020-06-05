<template>
  <div class="music-hall">
    <header-nav :title="'音乐馆'"></header-nav>
    <swiper></swiper>
    <cate-gory></cate-gory>
    <more :title="'超热歌单'" :page="'/mine'"></more>
  </div>
</template>

<script>
  import HeaderNav from '../../components/header-nav/HeaderNav'
  import Swiper from '../../components/swiper/swiper'
  import CateGory from '../../components/cate-gory/cateGory'
  import More from '../../components/more/More'
  export default {
      name: 'MusicHall' ,
      components: {
        HeaderNav,
        Swiper,
        CateGory,
        More
      }
  }
</script>

<style scoped>
  .music-hall {
    background: skyblue;
    width: 100%;
    height: 100%;
  }
</style>