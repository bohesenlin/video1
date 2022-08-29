<template>
    <div class="m-home">
        <div v-for="(item, index) in listData" :key="index">
            <div class="video-list active" v-for="(item, index) in item.components" :key="index">
                <h3 class="video-list-item-title">{{item.extraExtend.title}}</h3>
                <div class="video-item-list">
                    <router-link
                        :to="{ path: '/youkuvideoview', query: { item: JSON.stringify(item) } }"
                        tag="a"
                        href="#"
                        class="video-item"
                        v-for="(item, index) in item.itemList"
                        :key="index"
                    >
                        <!-- 更改，原来为videoid，更改成videoLink -->
                        <div class="card">
                            <img v-lazy="item.img.indexOf('http')!=-1?item.img:'https:' + item.img" />
                            <div class="count">
                                <div>{{ item.summary }}</div>
                            </div>
                        </div>
                        <p class="title" v-html="item.title"></p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        listData: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped>
.m-home {
    /* padding: 1vw 1.33333333vw 0; */
    padding: 13.33333333vw 1.33333333vw 0;
    height: 95vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
.m-home .video-item-list{
    overflow-x: scroll;
    display: flex;
    flex-wrap: wrap;
    height: 106vw;
    flex-direction: column;
}
/* .m-home .video-list {
    
} */
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
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-top: 1.33333333vw;
    font-size: 3.2vw;
}
</style>
