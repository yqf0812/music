<template>
<div class="swiper-box" style="">
    <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../assets/images/cyin.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item><img src="../../assets/images/y2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/images/young.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
</div>
        
</template>

<script>

export default {

}
</script>

<style scoped>
    .swiper-box {
        height:120px;
        padding: 10px;
    }
    .mint-swipe {
        border-radius: 10px;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>