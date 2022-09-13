<template>
    <div class="m-home" ref="abc">
        <div class="video-list active">
            <a
                class="video-item"
                v-for="(item, index) in listdata"
                :key="index"
                @click="click(item)"
            >
                <div class="card">
                    <img v-lazy="item.imgUrl" />
                    <div class="count">
                        <div>{{ item.figure_caption }}</div>
                    </div>
                </div>
                <p class="title" v-html="item.title"></p>
            </a>
        </div>
        <div class="loadmore" ref="loadmore"></div>
        <!-- 加载更多 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
            winHeight: 0, //窗口高度
            resultnum: 0, //项目个数
            index: 1, //当前索引
            pages: 0, //总页数
            listdata: [], //所有列表
            path: '', //路由地址
            query: {},
            query1:{
                "tengxun":{
                    'tvplay': {
                        append: 1,
                        listpage: 2,
                        pagesize: 30,
                        channel: 'tv',
                        feature: 4,
                        offset: 0,
                    },
                    'movie': {
                        channel: 'movie',
                        itype: 100062,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                    'comic': {
                        channel: 'cartoon',
                        iarea: 1,
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                    'variety': {
                        channel: 'variety',
                        offset: 0,
                        append: 0,
                        listpage: 2,
                        pagesize: 30,
                        sort: 75,
                    },
                
                },
                "aiqiyi":{
                    'tvplay': {
                        channel_id: 2,
                        mode: 11,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                    
                    'movie': {
                        channel_id: 1,
                        mode: 11,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                    'comic': {
                        channel_id: 4,
                        mode: 11,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                    'variety': {
                        channel_id: 6,
                        mode: 24,
                        page_id: 1,
                        data_type: 1,
                        ret_num: 48,
                    },
                },
                "youku":{
                    'tvplay': { c: 97, p: 1, type: 'show' },
                    'movie': { c: 96, p: 1, type: 'show' },
                    'comic': { c: 100, p: 1, type: 'show' },
                    'variety': { c: 85, p: 1, type: 'show' },
                },
                "douban":{
                    'hanju': { start: 0, tags: '韩国' ,selected_categories:{"地区":"韩国"}},
                    'oumei': { start: 0, tags: '欧美,Netflix' ,selected_categories:{"地区":"欧美"}},
                    'yingju': { start: 0, tags: '英国' ,selected_categories:{"地区":"英国"}},
                    'riju': { start: 0, tags: '日本' ,selected_categories:{"地区":"日本"}},
                },
                "mangguotv":{
                    'tvplay': {
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
                    'movie': {
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
                    'comic': {
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
                    'variety': {
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
            }
        }
    },
    created() {
        // 记录当前路由地址
        this.path = this.$route.path
        this.query = this.$route.query
        // 加载第一页数据
        this.http_request(this.query1)
    },
    mounted() {
        //绑定滚动事件
        this.Scroll1()
    },

    beforeDestroy() {
        this.$refs.abc.removeEventListener('scroll', this.Handlingevents, true)
        console.log('移除事件')
    },

    methods: {
        Scroll1() {
            this.winHeight = document.documentElement.clientHeight
            this.$refs.abc.addEventListener('scroll', this.Handlingevents, true)
        },

        Handlingevents() {
            // loadmore距离顶部距离
            let currentHeight = this.$refs.loadmore.getBoundingClientRect().top
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                if (this.winHeight - currentHeight > 0) {
                    console.log('加载更多')
                    this.index++
                    this.loadmore()
                }
            }, 300)
        },

        http_request(query) {
            // console.log(this.path.split('/'))
            let path = this.path.split('/')[2]
            if(path == "oumei"|| path == 'hanju'|| path == 'yingju'|| path == 'riju'){
                this.$api.douban.doubanclass(query.douban[path]).then((res) => {
                    this.listdata.push(...res.data)
                })
                return
            }
            this.$api.tengxun.tengxunclass(query.tengxun[path]).then((res) => {
                this.listdata.push(...res.data)
            })
            this.$api.aiqiyi.aiqiyiclass(query.aiqiyi[path]).then((res) => {
                this.listdata.push(...res.data)
            })
            this.$api.youku.youkuclass(query.youku[path]).then((res) => {
                this.listdata.push(...res.data)
            })
            this.$api.mangguo.mangguoclass(query.mangguotv[path]).then((res) => {
                this.listdata.push(...res.data)
            })
            
        },

        loadmore() {
            let path = this.path.split('/')[2]
            if(path == "oumei"|| path == 'hanju'|| path == 'yingju'|| path == 'riju'){
                this.query1.douban[path].start = (this.index-1)*30
                this.http_request(this.query1)
                return
            }
            this.query1.tengxun[path].offset = (this.index-1)*30
            this.query1.aiqiyi[path].page_id=this.index
            this.query1.youku[path].p = this.index
            this.query1.mangguotv[path].pn = this.index
            // this.query1.douban[path].start = (this.index-1)*20
            
            this.http_request(this.query1)
        },
        click(item) {
            console.log(item)
            if (
                item.platform == '腾讯视频' ||
                item.platform == '芒果TV' ||
                item.platform == '爱奇艺' ||
                item.platform == '优酷'
            ) {
                var platform = ''
                if(item.platform == '腾讯视频'){
                    platform = 'tengxun'
                }else if(item.platform == '芒果TV'){
                    platform = 'mangguo'
                }else if(item.platform == '爱奇艺'){
                    platform = 'aiqiyi'
                }else if(item.platform == '优酷'){
                    platform = 'youku'
                }
                    
                this.$router.push({
                    path: `/${platform}videoview`,
                    query: { item: JSON.stringify(item) },
                })
            }else{
                this.$router.push({
                    path: `/videosearchview/cupfoxsearch`,
                    query: { name: JSON.stringify(item.title),platform:'douban' },
                })
            }
        },
    },

}
</script>

<style scoped>
.m-home {
    /* padding: 1vw 1.33333333vw 0; */
    padding: 1vw 1.33333333vw 0;
    height: 93.6vh;
    overflow-y: scroll;
}
.m-home .video-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.m-home .video-list .video-item {
    width: 33%;
    box-sizing: border-box;
    padding: 2.13333333vw 1.33333333vw;
    text-decoration: none;
    color: #212121;
}
.m-home .video-list .video-item .card {
    position: relative;
    height: 41.6vw;
    overflow: hidden;
    border-radius: 5px;
}
.m-home .video-list .video-item .card .count {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7.2vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 3.2vw;
    color: #fff;
    /* background-image: linear-gradient(transparent, #000000); */
}
.m-home .video-list .video-item .card .count div {
    height: 4.6vw;
    /* width: 3vw; */
    background-color: rgba(101, 110, 121, 0.5);
    margin-bottom: 10px;
    margin-right: 6px;
    border-radius: 3px;
    padding: 2px;
    /* line-height: 4.6vw; */
}
.m-home .video-list .video-item .card img {
    width: 29.6vw;
    border-radius: 5px;
    box-shadow: 0 0.53333vw 2.66667vw rgba(0, 0, 0, 0.2);
}
.m-home .video-list .video-item .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 1.33333333vw;
    font-size: 3.2vw;
}
</style>
