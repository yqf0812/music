<template>
    <div class="header-nav">
        <span class="header-title" >{{title}}</span>
        <div class="search-box">
            <div class="search-btn">
                <span class="search-icon">
                    <img src="./../../assets/images/search.png" alt="">
                    <span>搜索歌曲</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderNav',
    props: ['title']
}
</script>

<style scoped>
    .header-nav {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        background: rebeccapurple;
    }
    .header-title {
        flex: 0.3;
        margin-left: 10px;
        font-size: 20px;
        font-weight: bolder;
    }
    .search-box {
        flex: 1;
        display: flex;
        align-items: center;
    }
    .search-btn {
        height: 25px;
        width: 90%;
        border: 1px solid #fff;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-icon span {
        margin-left: 5px;
        font-size: 15px;
    }
    img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
</style>