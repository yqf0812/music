<template>
  <div class="music-hall">
    <header-nav :title="'音乐馆'"></header-nav>
  </div>
</template>

<script>
  import HeaderNav from '../../components/header-nav/HeaderNav'
  export default {
      name: 'MusicHall' ,
      components: {
        HeaderNav
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