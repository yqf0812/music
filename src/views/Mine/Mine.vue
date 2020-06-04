<template>
    <div class="mine">
        <header-nav :title="'我的'"></header-nav>
    </div>
</template>

<script>
    import HeaderNav from '../../components/header-nav/HeaderNav'
    export default {
        name: 'Mine',
        components: {
            HeaderNav
        }
    }
</script>

<style scoped>
    .mine {
        background: red;
        width: 100%;
        height: 100%;
    }
</style>