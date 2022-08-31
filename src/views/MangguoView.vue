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
        <keep-alive exclude="mangguovideoview">
            <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'Mangguo',
    components: {},
    data() {
        return {
            text: '',
            isShow: false,
            pageData: [
                {
                    path: '/mangguo/tv1',
                    name: '电视',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 2,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        area: 'a1',
                        year: 'all',
                        chargeInfo: 'a1',
                        sort: 'c2',
                    },
                },
                {
                    path: '/mangguo/tv2',
                    name: '电视剧最新',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 2,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        area: 'a1',
                        year: 'all',
                        chargeInfo: 'a1',
                        sort: 'c1',
                    },
                },
                {
                    path: '/mangguo/tv3',
                    name: '电视剧高分',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 2,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        area: 'a1',
                        year: 'all',
                        chargeInfo: 'a1',
                        sort: 'c4',
                    },
                },
                {
                    path: '/mangguo/variety',
                    name: '综艺',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 1,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        area: 'a1',
                        chargeInfo: 'a1',
                        sort: 'c2',
                    },
                },
                {
                    path: '/mangguo/comic',
                    name: '动漫',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 50,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        area: 'a1',
                        sort: 'c1',
                    },
                },
                {
                    path: '/mangguo/movie1',
                    name: '电影',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 3,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        year: 'all',
                        chargeInfo: 'a1',
                        sort: 'c2',
                    },
                },
                {
                    path: '/mangguo/movie2',
                    name: '电影最新',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 3,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        year: 'all',
                        chargeInfo: 'a1',
                        sort: 'c1',
                    },
                },
                {
                    path: '/mangguo/movie3',
                    name: '电影高分',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 3,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        year: 'all',
                        chargeInfo: 'a1',
                        sort: 'c4',
                    },
                },
                {
                    path: '/mangguo/children',
                    name: '少儿',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 10,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                    },
                },
                {
                    path: '/mangguo/entertainment',
                    name: '娱乐',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 113,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        sort: 'c2',
                    },
                },
                {
                    path: '/mangguo/documentary',
                    name: '纪录片',
                    params: {
                        allowedRC: 1,
                        platform: 'pcweb',
                        channelId: 51,
                        pn: 1,
                        pc: 80,
                        hudong: 1,
                        _support: 10000000,
                        kind: 'a1',
                        sort: 'c2',
                    },
                },
            ],
        }
    },
    mounted() {
        // this.$api.mangguo
        //     .mangguocategory()
        //     .then((res) => {
        //         console.log(res)
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
