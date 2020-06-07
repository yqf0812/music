<template>
  <div class="list" @click="sonEvent">
    <div class="img-box">
      <img :src="img" alt="">
      <span class="play-box">
        <i class="play-num"></i>
        <span class="font">70万</span>
      </span>
      <i class="play-music"></i>
    </div>
    <p>{{detail}}</p>
  </div>
</template>

<script>
export default {
  name:'SongList',
  props: ['img', 'detail'],
  methods: {
    sonEvent() {
      console.log(1)
      this.$router.push({
          path: '/playdetail',
          query:{
　　　　　　　　id:'1111'
　　　　　　}
        })
    }
  }
}
</script>
<style scoped>
  .list {
    height: 135px;
    width: 110px;
    background: limegreen;
    border-radius: 10px;
    /* background: url('../../assets/images/aaa.jpg');
    background-size: 100% 100%; */
  }
  .img-box {
    position: relative;
    height: 110px;
    width: 100%;
  }
  .play-box {
    position: absolute;
    bottom: 5px;
    left: 5px;
    z-index: 900;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  i {
    width: 16px;
    height: 16px;
    display: inline-block;
    background: url('../../assets/images/play2.png');
    background-size: 100% 100%;
  }
  .font {
    font-size: 10px;
    color: #ffffff;
  }
  .play-music {
    position: absolute;
    width: 16px;
    height: 16px;
    display: inline-block;
    background: url('../../assets/images/play1.png');
    background-size: 100% 100%;
    z-index: 900;
    bottom: 5px;
    right: 5px;
  }
  p {
    margin: 0;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 10px;
  }
</style>