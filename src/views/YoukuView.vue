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
    name: 'Youku',
    components: {},
    data() {
        return {
            text: '',
            isShow: false,
            pageData: [
                {
                    path: '/youku/index',
                    name: '主页',
                    // params: {},
                },
                {
                    path: '/youku/tv1',
                    name: '电视剧',
                    params: { c: 97, p: 1, type: 'show' },
                },
                {
                    path: '/youku/tv2',
                    name: '电视剧最近更新',
                    params: { c: 97, s: 6, p: 1, type: 'show' },
                },
                {
                    path: '/youku/tv3',
                    name: '电视剧最好评',
                    params: { c: 97, s: 4, p: 1, type: 'show' },
                },
                {
                    path: '/youku/tv4',
                    name: '电视剧最近上映',
                    params: { c: 97, s: 5, p: 1, type: 'show' },
                },
                {
                    path: '/youku/movie1',
                    name: '电影最多播放',
                    params: { c: 96, p: 1, type: 'show' },
                },
                {
                    path: '/youku/movie2',
                    name: '电影最近更新',
                    params: { c: 96, s: 6, p: 1, type: 'show' },
                },
                {
                    path: '/youku/movie3',
                    name: '电影最好评',
                    params: { c: 96, s: 4, p: 1, type: 'show' },
                },
                {
                    path: '/youku/movie4',
                    name: '电影最近上映',
                    params: { c: 96, s: 5, p: 1, type: 'show' },
                },
                {
                    path: '/youku/variety1',
                    name: '综艺',
                    params: { c: 85, p: 1, type: 'show' },
                },
                {
                    path: '/youku/variety2',
                    name: '综艺最近更新',
                    params: { c: 85, s: 6, p: 1, type: 'show' },
                },
                {
                    path: '/youku/variety3',
                    name: '综艺最近上映',
                    params: { c: 85, s: 5, p: 1, type: 'show' },
                },
                {
                    path: '/youku/comic1',
                    name: '动漫',
                    params: { c: 100, p: 1, type: 'show' },
                },
                {
                    path: '/youku/comic2',
                    name: '动漫最近更新',
                    params: { c: 100, s: 6, p: 1, type: 'show' },
                },
                {
                    path: '/youku/comic3',
                    name: '动漫最好评',
                    params: { c: 100, s: 4, p: 1, type: 'show' },
                },
                {
                    path: '/youku/comic4',
                    name: '动漫最近上映',
                    params: { c: 100, s: 5, p: 1, type: 'show' },
                },
                {
                    path: '/youku/comic5',
                    name: '动漫最多评论',
                    params: { c: 100, s: 2, p: 1, type: 'show' },
                },
                {
                    path: '/youku/children',
                    name: '少儿',
                    params: { c: 177, p: 1, type: 'show' },
                },
                {
                    path: '/youku/documentary',
                    name: '纪录片',
                    params: { c: 84, p: 1, type: 'show' },
                },
                {
                    path: '/youku/knowledge',
                    name: '知识',
                    params: { c: 87, p: 1, type: 'show' },
                },
                {
                    path: '/youku/culture',
                    name: '文化',
                    params: { c: 178, p: 1, type: 'show' },
                },
                {
                    path: '/youku/entertainment',
                    name: '娱乐',
                    params: { c: 86, p: 1, type: 'show' },
                },
            ],
        }
    },
    mounted() {
        // this.$api.api
        //     .youku()
        //     .then((res) => {
        //         console.log(res.data.componentList[2].dataNode)
        //     })
        // this.$api.youku.youkucategory().then((res) => {
        //     console.log(res)
        //     console.log(res.data.data.categoryVideos)
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
