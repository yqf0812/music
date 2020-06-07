<template>
  <div class="play-list">
      <div class="play-header"></div>
      <div class="play-content"></div>
      <div class="play"></div>
  </div>
</template>

<script>
export default {
  name:'PlayDetail',
  mounted () {
      console.log(this.$route)
  }
}
</script>
<style scoped>
    .play-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .play-header {
        width: 100%;
        height: 30px;
        background: yellow;
    }
    .play-content {
        flex: 1;
        overflow-x: scroll;
    }
    .play {
        width: 100%;
        height: 35px;
        background: yellowgreen;
    }
</style>