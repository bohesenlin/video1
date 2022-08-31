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
    name: 'HomeView',
    components: {},
    data() {
        return {
            text: '',
            isShow: false,
            pageData: [
                
                {
                    path: '/aiqiyi/tvsynthesis',
                    name: '电视剧热播榜',
                    params: {
                        channel_id: 2,
                        mode: 11,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/tvhit',
                    name: '电视剧新上线',
                    params: {
                        channel_id: 2,
                        mode: 4,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/tvnew',
                    name: '电视剧综合',
                    params: {
                        channel_id: 2,
                        mode: 24,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/animationsynthesis',
                    name: '电影综合排序',
                    params: {
                        channel_id: 1,
                        mode: 24,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/animationnewonline',
                    name: '电影热播榜',
                    params: {
                        channel_id: 1,
                        mode: 11,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/animationhitlist',
                    name: '电影好评榜',
                    params: {
                        channel_id: 1,
                        mode: 8,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/newmovie',
                    name: '电影新上线',
                    params: {
                        channel_id: 1,
                        mode: 4,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },

                {
                    path: '/aiqiyi/animation1',
                    name: '动漫综合',
                    params: {
                        channel_id: 4,
                        mode: 24,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/animation2',
                    name: '动漫新上线',
                    params: {
                        channel_id: 4,
                        mode: 4,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/animation3',
                    name: '动漫热播榜',
                    params: {
                        channel_id: 4,
                        mode: 11,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/variety1',
                    name: '综艺',
                    params: {
                        channel_id: 6,
                        mode: 24,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/variety2',
                    name: '综艺热播榜',
                    params: {
                        channel_id: 6,
                        mode: 11,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/variety3',
                    name: '综艺新上线',
                    params: {
                        channel_id: 6,
                        mode: 4,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                {
                    path: '/aiqiyi/documentary',
                    name: '纪录片',
                    params: {
                        channel_id: 3,
                        mode: 24,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
            ],
        }
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
