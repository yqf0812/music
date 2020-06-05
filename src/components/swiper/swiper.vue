<template>
<div class="swiper-box" style="">
    <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../assets/images/1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item><img src="../../assets/images/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/images/1.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
</div>
        
</template>

<script>

export default {

}
</script>

<style scoped>
    .swiper-box {
        height:150px;
        padding: 10px;
    }
    .mint-swipe {
        border-radius: 10px;
    }
</style>