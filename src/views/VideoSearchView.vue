<template>
    <div class="search">
        <Topnav />
        <div class="nav">
            <div class="nav_list">
                <router-link tag="a" :to="{ path: '/videosearchview/cupfoxsearch', query: this.$route.query }">cupfox搜索</router-link>
                <router-link tag="a" :to="{ path: '/videosearchview/tengxunsearch', query: this.$route.query }">聚合搜索</router-link>
                <!-- <router-link tag="a" :to="{ path: '/videosearchview/aiqiyisearch', query: this.$route.query }">爱奇艺搜索</router-link> -->
                <!-- <router-link tag="a" :to="{ path: '/videosearchview/youkusearch', query: this.$route.query }">优酷搜索</router-link> -->
                <!-- <router-link tag="a" :to="{ path: '/videosearchview/mangguosearch', query: this.$route.query }">芒果TV搜索</router-link> -->
                <!-- <router-link tag="a" :to="{ path: '/videosearchview/fantuantvsearch', query: this.$route.query }">饭团TV搜索</router-link> -->
            </div>
        </div>
        <div class="view">
            <keep-alive>
                <router-view :key="$route.fullPath"></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Topnav from '../components/Topnav'
export default {
    components: {
        Topnav,
    },
    mounted() {
        console.log(this.$route.query)
    },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.search .nav{
    height: 10.66666667vw;
    overflow: hidden;
}
.search .nav .nav_list{
    display: flex;
    text-decoration: none;
    overflow-x: scroll;
}
.search .nav .nav_list a{
    padding: 0 4.26666667vw;
    white-space: nowrap;
    font-size: 3.73333333vw;
    text-decoration: none;
    height: 10.66666667vw;
    line-height: 10.66666667vw;
    color: #808080;
    border-radius: 10px;
}
</style>