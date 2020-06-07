<template>
  <div class="more">
      <h3>{{title}}</h3>
      <router-link style="font-size: 10px;" :to='page' tag='span'>更多<i class="el-icon-arrow-right"></i></router-link>
  </div>
</template>

<script>
export default {
  name:'More',
  props: ['title', 'page']
}
</script>
<style scoped>
    .more {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>