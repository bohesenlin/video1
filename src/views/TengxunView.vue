<template>
    <div class="home">
        <header class="nav">
            <div class="channel-menu">
                <div class="tabs">
                    <div class="tabs-list">
                        <router-link
                            :to="{ path: item.path }"
                            tag="a"
                            v-for="(item, index) in pageData"
                            :key="index"
                            >{{ item.name }}</router-link
                        >
                        <div class="line"></div>
                    </div>
                </div>
                <div class="after">
                    <img class="search1" src="../assets/img/search1.png" @click="click" />
                    <img class="record" src="../assets/img/历史.png" @click="click_record()" />
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
                    path: '/tengxun/tvplay',
                    name: '电视剧',
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
                    path: '/tengxun/movie',
                    name: '电影',
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
                    path: '/tengxun/comic',
                    name: '动漫',
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
            ],
        }
    },
    mounted() {
        
    },
    methods: {
        click() {
            if (this.isShow) {
                if (this.$route.query.name == this.text || this.text == '') {
                    this.isShow = !this.isShow
                    return null
                }
                this.$router.replace({
                    path: '/videosearchview/cupfoxsearch',
                    query: { name: this.text },
                })
            }
            this.isShow = !this.isShow
        },
        click_record() {
            this.$router.push({
                path: '/records',
            })
        },
    },
}
</script>

<style scoped>
@import './View.css';
</style>
