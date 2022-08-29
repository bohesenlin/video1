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
    name: 'TengxunView',
    components: {},
    data() {
        return {
            text: '',
            isShow: false,
            pageData: [
                {
                    path: '/tengxun/index',
                    name: '主页',
                    params: {
                        
                    },
                },
                {
                    path: '/tengxun/tv2',
                    name: '都市生活',
                    params: {
                        append: 1,
                        listpage: 2,
                        pagesize: 30,
                        // sort: 75,
                        channel: 'tv',
                        feature: 4,
                        offset: 0,
                    },
                },
                {
                    path: '/tengxun/tv1',
                    name: '电视剧喜剧',
                    params: {
                        channel: 'tv',
                        feature: 8,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/tv3',
                    name: '电视剧武侠江湖',
                    params: {
                        channel: 'tv',
                        feature: 9,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/tv4',
                    name: '罪案谍战',
                    params: {
                        channel: 'tv',
                        feature: 5,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/tv5',
                    name: '古装历史',
                    params: {
                        channel: 'tv',
                        feature: 2,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/tv6',
                    name: '青春校园',
                    params: {
                        channel: 'tv',
                        feature: 10,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/movie1',
                    name: '电影喜剧',
                    params: {
                        channel: 'movie',
                        itype: 100004,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/movie2',
                    name: '院线大片',
                    params: {
                        channel: 'movie',
                        itype: 100062,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/movie3',
                    name: '电影犯罪',
                    params: {
                        channel: 'movie',
                        itype: 4,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/movie4',
                    name: '电影科幻',
                    params: {
                        channel: 'movie',
                        itype: 100012,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/comic1',
                    name: '动漫国漫',
                    params: {
                        channel: 'cartoon',
                        iarea: 1,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/comic2',
                    name: '动漫日漫',
                    params: {
                        channel: 'cartoon',
                        iarea: 2,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/comic3',
                    name: '动漫经典',
                    params: {
                        channel: 'cartoon',
                        itype: 3,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                {
                    path: '/tengxun/variety',
                    name: '综艺',
                    params: {
                        channel: 'variety',
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                },
                // '动漫国漫': 'channel=cartoon&iarea=1',
                // '动漫日漫': 'channel=cartoon&iarea=2',
                // '动漫经典': 'channel=cartoon&itype=3',
                // '少儿益智': 'channel=child&itype=2',
                // '少儿儿歌': 'channel=child&itype=1',
                // '少儿英语': 'channel=child&itype=5',
                // '少儿手工绘画': 'channel=child&itype=3',
                // '少儿魔幻科幻': 'channel=child&itype=12',
            ],
        }
    },
    mounted() {
        // this.$api.tengxun.tengxun().then((res) => {
        //     console.log(res.data.vip_ids)
        // })
    },
    methods: {
        click() {
            // this.$refs.search.style.display = 'block'
            if (this.isShow) {
                if (this.$route.query.name == this.text || this.text == '') {
                    this.isShow = !this.isShow
                    return null
                }
                this.$router.replace({
                    path: '/videosearchview/tengxunsearch',
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
