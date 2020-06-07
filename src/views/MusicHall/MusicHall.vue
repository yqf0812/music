<template>
  <div class="music-hall">
    <div class="title">
      <header-nav :title="'音乐馆'"></header-nav>
    </div>
    <div class="content">
      <swiper></swiper>
      <cate-gory></cate-gory>
      <more :title="'超热歌单'" :page="'/mine'"></more>
      <div class="hot-list" >
        <div class="song-list"v-for="(list,index) in hotList" :key="index">
          <song-list :detail="list.specialname"  class="list-item"></song-list>
        </div>
        
      </div>
      <more :title="'最新专辑'" :page="'/mine'"></more>
      <div class="hot-list">
        <song-list class="list-item mar"></song-list>
        <song-list class="list-item"></song-list>
        <song-list class="list-item"></song-list>
        <song-list class="list-item"></song-list>
        <song-list class="list-item"></song-list>
        <song-list class="list-item"></song-list>
      </div>
      <more :title="'大家都在看'" :page="'/mine'"></more>
      <div class="hot-list">
        <mv-list class="list-item mar"></mv-list>
        <mv-list class="list-item"></mv-list>
        <mv-list class="list-item "></mv-list>
        <mv-list class="list-item "></mv-list>
        <mv-list class="list-item "></mv-list>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../../components/header-nav/HeaderNav'
  import Swiper from '../../components/swiper/swiper'
  import CateGory from '../../components/cate-gory/cateGory'
  import More from '../../components/more/More'
  import SongList from '../../components/song-list/SongList'
  import MvList from '../../components/mv-list/MvList'

  import {mapState} from 'vuex'
  export default {
      name: 'MusicHall' ,
      components: {
        HeaderNav,
        Swiper,
        CateGory,
        More,
        SongList,
        MvList
      },
      computed: {
        ...mapState(['hotList'])
      },
      mounted () {
        this.$store.dispatch('reqHotList')
      },
      methods: {
        fatherEvent() {
          console.log(2)
        }
      }
  }
</script>

<style scoped>
  .hot-list .song-list:nth-child(1){
    margin-left: 10px !important;
  }
  .music-hall {
    background: skyblue;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .title {
    height: 50px;
  }
  .content {
    flex: 1;
    overflow-y: scroll;
  }
  .hot-list {
    display: flex;
    width: 100%;
    margin-right: 10px;
    float: right;
    justify-content: space-between;
    overflow-x: scroll;
  }
  .list-item {
    margin-left: 10px;
  }
  .mar {
    margin-left: 20px !important;
  }
  .hot-list .list-item {
    flex-shrink: 0;
  }
  .hot-list::-webkit-scrollbar { width: 0 !important }
</style>