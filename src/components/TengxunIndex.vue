<template>
    <div class="m-home" ref="abc">
        <div class="video" v-for="(item, index) in listdata" :key="index">
            <h3 class="videotitle">{{ index }}</h3>
            <div class="video-list active">
                <router-link
                    :to="{
                        path: '/tengxunvideoview',
                        query: { item: JSON.stringify(item) },
                    }"
                    tag="a"
                    href="#"
                    class="video-item"
                    v-for="(item, index) in item"
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
        </div>
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
            listdata: {}, //所有列表
            path: '', //路由地址
            query1: {},
        }
    },
    created() {
        this.$api.tengxun.main().then((res) => {
            console.log(res.data)
            this.listdata = res.data.data
            if (res.data.data['动漫'].length == 0) {
                this.$api.tengxun.main({time:new Date()}).then((res) => {
                    console.log(res.data)
                    this.listdata = res.data.data
                })
            }
        })
    },
    mounted() {
        // 记录当前路由地址
        this.path = this.$route.path
        this.query1 = this.$route.query
        // console.log(this.query1)
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
