<template>
  <div class="recommend">
    <header-nav :title="'推荐'"></header-nav>
  </div>
</template>

<script>
import HeaderNav from '../../components/header-nav/HeaderNav'
export default {
    name: 'Recommend',
    components: {
      HeaderNav
    }
}
</script>

<style scoped>
  .recommend {
    background: green;
    width: 100%;
    height: 100%;
  }
</style>