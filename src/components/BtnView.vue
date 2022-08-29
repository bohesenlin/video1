<template>
    <div class="home">
        <div class="abc">
            <router-link to="/aiqiyi" tag="a">爱奇艺</router-link>
            <router-link to="/tengxun" tag="a">腾讯视频</router-link>
            <router-link to="/youku" tag="a">优酷</router-link>
            <router-link to="/mangguo" tag="a">芒果TV</router-link>
            <!-- <router-link to="/fantuantv" tag="a">饭团TV</router-link> -->
            <router-link to="/records" tag="a">观看记录</router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
}
.abc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 5vh; */
    overflow-x: scroll;
}
.abc a {
    padding: 0 4.26666667vw;
    white-space: nowrap;
    font-size: 3.73333333vw;
    text-decoration: none;
    height: 10.66666667vw;
    line-height: 10.66666667vw;
    color: #808080;
    border-radius: 5px;
}
</style>
