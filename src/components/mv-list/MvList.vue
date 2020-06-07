<template>
  <div class="mv-list">
      <img src="../../assets/images/mv.jpg" alt="">
      <span class="play-box">
        <i class="play-num"></i>
        <span class="font">70万</span>
      </span>
  </div>
</template>

<script>
export default {
  name:'MvList',
}
</script>
<style scoped>
    .mv-list {
        height: 110px;
        width: 168px;
        background: limegreen;
        border-radius: 10px;
        position: relative;
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .play-box {
        position: absolute;
        bottom: 5px;
        right: 5px;
        z-index: 900;
        display: flex;
        align-items: center;
    }
    i {
        width: 16px;
        height: 16px;
        display: inline-block;
        background: url('../../assets/images/shiping.png');
        background-size: 100% 100%;
    }
    .font {
        font-size: 10px;
        color: #ffffff;
        margin-left: 5px;
    }
</style>