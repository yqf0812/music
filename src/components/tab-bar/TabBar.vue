<template>
    <div class="bottom-tab">
        <span class="tab-item" @click="switchTo('/musicHall')">
            <img :src="'/musicHall' === $route.path ? imgArr[0].acv : imgArr[0].def" alt="">
            <span :class="{on: '/musicHall' === $route.path}">音乐馆</span>
        </span>
        <span class="tab-item" @click="switchTo('/recommend')">
            <img :src="'/recommend' === $route.path ? imgArr[1].acv : imgArr[1].def" alt="">
            <span :class="{on: '/recommend' === $route.path}">推荐</span>
        </span>
        <span class="tab-item" @click="switchTo('/mine')">
            <img :src="'/mine' === $route.path ? imgArr[2].acv : imgArr[2].def" alt="">
            <span :class="{on: '/mine' === $route.path}">我的</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {
            imgArr: [
                {def: require('./../../assets/images/musicHall-def.png'), acv: require('./../../assets/images/musicHall-acv.png')},
                {def: require('./../../assets/images/recom-def.png'), acv: require('./../../assets/images/recom-acv.png')},
                {def: require('./../../assets/images/mine-def.png'), acv: require('./../../assets/images/mine-acv.png')}
            ]
        }
    },
    methods: {
        switchTo(path) {
            this.$router.replace(path);
        }
    }
}
</script>

<style scoped>
    .bottom-tab {
        width: 100%;
        height: 50px;
        background: #000;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999;
        display: flex;
    }
    .tab-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #666;
    }
    img {
        width: 25%;
    }
    .on {
        color: greenyellow;
    }
</style>