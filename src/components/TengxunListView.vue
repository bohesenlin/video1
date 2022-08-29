<template>
    <div class="m-home" ref="abc">
        <div class="video-list active">
            <router-link
                :to="{ path: '/' + path.split('/')[1] + 'videoview', query: { item: JSON.stringify(item) } }"
                tag="a"
                href="#"
                class="video-item"
                v-for="(item, index) in listdata"
                :key="index"
            >
                <div class="card">
                    <img v-lazy="item.imgUrl" />
                    <div class="count">
                        <div>{{ item.figure_caption }}</div>
                    </div>
                </div>
                <p class="title" v-html="item.title"></p>
            </router-link>
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
        }
    },
    created() {
        // 记录当前路由地址
        this.path = this.$route.path
        this.query = this.$route.query
        // 加载第一页数据
        this.http_request(this.$route.query)
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
            if (this.path.indexOf('tengxun') != -1) {
                this.$api.tengxun.tengxunclass(query).then((res) => {
                    this.listdata.push(...res.data)
                })
            } else if (this.path.indexOf('aiqiyi') != -1) {
                this.$api.aiqiyi.aiqiyiclass(query).then((res) => {
                    this.listdata.push(...res.data)
                })
            }else if (this.path.indexOf('youku') != -1) {
                this.$api.youku.youkuclass(query).then((res) => {
                    this.listdata.push(...res.data)
                })
            }else if (this.path.indexOf('mangguo') != -1) {
                this.$api.mangguo.mangguoclass(query).then((res) => {
                    this.listdata.push(...res.data)
                })
            }else if (this.path.indexOf('fantuantv') != -1) {
                this.$api.fantuantv.fantuantvclass(query).then((res) => {
                    this.listdata.push(...res.data)
                })
            }
        },

        loadmore() {
            if (this.path.indexOf('tengxun') != -1) {
                this.query.offset = (this.index-1)*30
            } else if (this.path.indexOf('aiqiyi') != -1) {
                this.query.page_id=this.index
            }else if (this.path.indexOf('youku') != -1) {
                this.query.p = this.index
            }else if (this.path.indexOf('mangguotv') != -1) {
                this.query.pn = this.index
            }else if (this.path.indexOf('fantuantv') != -1) {
                var index123 = 0
                if(this.query.url.indexOf('-')!=-1){
                    index123 = this.query.url.lastIndexOf('-')+1
                }else{
                    index123 = this.query.url.lastIndexOf('/')+1
                }
                this.query.url = this.query.url.substr(0,index123) + this.index.toString() +'.html'
            }
            
            this.http_request(this.query)
        },
    },

    watch: {
        // '$route.path'() {
        //     if (this.$route.path !== this.path) {
        //         this.$refs.abc.removeEventListener('scroll', this.Handlingevents, true)
        //         console.log('移除事件')
        //     }
        //     if (this.$route.path == this.path) {
        //         this.$refs.abc.addEventListener('scroll', this.Handlingevents, true)
        //         console.log('添加滚动事件')
        //     }
        // },

        // listData(data) {
        //     // console.log(data)
        //     this.listdata = data
        // },
    },
}
</script>

<style scoped>
.m-home {
    /* padding: 1vw 1.33333333vw 0; */
    padding: 13.33333333vw 1.33333333vw 0;
    height: 95vh;
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
