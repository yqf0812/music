<template>
    <div class="cate-gory">
        <span class="tab-item">
            <img src="./../../assets/images/geshou.png" alt="">
            <span>歌手</span>
        </span>
        <span class="tab-item">
            <img src="./../../assets/images/paihang.png" alt="">
            <span>排行</span>
        </span>
        <span class="tab-item">
            <img src="./../../assets/images/fenlei.png" alt="">
            <span>分类歌单</span>
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .cate-gory {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
</style>