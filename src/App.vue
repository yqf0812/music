<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from './components/tab-bar/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>
<style scoped>
  #app {
    width: 100%;
    height: 100%;
    background: black;
  }
</style>
