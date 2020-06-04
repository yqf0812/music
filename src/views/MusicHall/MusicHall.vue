<template>
  <div class="music-hall">
    <header-nav :title="'音乐馆'"></header-nav>
      <swiper></swiper>
    
  </div>
</template>

<script>
  import HeaderNav from '../../components/header-nav/HeaderNav'
  import Swiper from '../../components/swiper/swiper'
  export default {
      name: 'MusicHall' ,
      components: {
        HeaderNav,
        Swiper
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