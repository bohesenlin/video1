<template>
    <div class="home">
        <header class="nav">
            <div class="channel-menu">
                <div class="tabs">
                    <div class="tabs-list">
                        <router-link
                            :to="{ path: item.path, query: item.params }"
                            tag="a"
                            v-for="(item, index) in pageData"
                            :key="index"
                            >{{ item.name }}</router-link
                        >
                        <div class="line"></div>
                    </div>
                </div>
                <div class="after">
                    <img src="../assets/img/search1.png" @click="click" />
                    <div class="search_bar" ref="search" v-show="isShow">
                        <div class="search_wrapper">
                            <form action="#" class="search">
                                <input
                                    class="search-inp"
                                    type="text"
                                    v-model="text"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <keep-alive>
            <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'FantuantvView',
    components: {},
    data() {
        return {
            text: '',
            isShow: false,
            pageData: [
                {
                    path: '/fantuantv/movie1',
                    name: '电影',
                    params: {
                        url:'https://fantuan.tv/vodtype/1-1.html'
                    },
                },
                {
                    path: '/fantuantv/movie2',
                    name: '电影人气',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/hits/id/1/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/movie3',
                    name: '电影评分',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/score/id/1/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/tv1',
                    name: '电视剧',
                    params: {
                        url:'https://fantuan.tv/vodshow/id/2/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/tv2',
                    name: '电视剧人气',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/hits/id/2/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/tv3',
                    name: '电视剧评分',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/score/id/2/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/variety1',
                    name: '综艺',
                    params: {
                        url:'https://fantuan.tv/vodtype/3-1.html'
                    },
                },
                {
                    path: '/fantuantv/variety2',
                    name: '综艺人气',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/hits/id/3/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/variety3',
                    name: '综艺评分',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/score/id/3/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/comic1',
                    name: '动漫',
                    params: {
                        url:'https://fantuan.tv/vodtype/4-1.html'
                    },
                },
                {
                    path: '/fantuantv/comic2',
                    name: '动漫人气',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/hits/id/4/page/1.html'
                    },
                },
                {
                    path: '/fantuantv/comic3',
                    name: '动漫评分',
                    params: {
                        url:'https://fantuan.tv/vodshow/by/score/id/4/page/1.html'
                    },
                },
            ],
        }
    },
    methods: {
        click() {
            if (this.isShow) {
                if (this.$route.query.name == this.text || this.text == '') {
                    this.isShow = !this.isShow
                    return null
                }
                this.$router.replace({
                    path: '/videosearchview/fantuantvsearch',
                    query: { name: this.text },
                })
            }
            this.isShow = !this.isShow
        },
    },
}
</script>

<style scoped>
@import './手机.css';
</style>
