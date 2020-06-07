<template>
  <div id="app">
    <div class="showDetail" >
        <div class="view">
        <router-view/>
      </div>
      <div class="bar">
        <tab-bar></tab-bar>
      </div>
    </div>
    <!-- <router-view/>
    <tab-bar></tab-bar> -->
  </div>
</template>
<script>
import TabBar from './components/tab-bar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  },
  data (){
    return {
    }
    
  }
}
</script>
<style scoped>
  #app {
    width: 100%;
    height: 100%;
    background: black;
    
  }
  .showDetail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .view {
    flex: 1;
    overflow: hidden;
  }
  .bar {
    height: 50px
  }
</style>
