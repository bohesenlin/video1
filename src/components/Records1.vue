<template>
    <div class="m-home">
        <h3>观看记录</h3>
        <div class="video-list">
            <div
                class="video-item"
                @click="click(item)"
                v-for="(item, index) in data_list"
                :key="index"
            >
                <div class="card">
                    <img v-lazy="item.imgUrl" />
                    <div class="count">
                        <div
                            v-html="
                                'figure_caption' in item
                                    ? item.figure_caption
                                    : ''
                            "
                        ></div>
                    </div>
                </div>
                <p class="title" v-html="item.title"></p>
                <p class="record">{{ '观看至' + item.watch_id + '集' }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data_list:[]
        }
    },
    created() {
        let data_list =JSON.parse(localStorage.getItem('data_list'))
        var Arr_list = []
        for(var val in data_list){
            Arr_list.push(data_list[val])
        }
        Arr_list.sort(this.sortArr)
        this.data_list = Arr_list
    },

    methods: {
        click(item){
            console.log(item)
            this.$router.push({path: `/${item.platform}videoview`,query: { item: JSON.stringify(item) },})
        },
        // 排序
        sortArr(a, b) {
            return b.watch_time - a.watch_time
        },
    },
}
</script>

<style scoped>
.m-home {
    padding: 1vw 1.33333333vw 0;
    height: 95vh;
    overflow-y: scroll;
}
.m-home .video-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.m-home .video-list .video-item {
    width: 33.3%;
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
    /* -webkit-line-clamp: 2; */
    -webkit-box-orient: vertical;
    /* margin-top: 1.33333333vw; */
    font-size: 3.2vw;
}
.m-home .video-list .video-item .record {
    font-size: 3.2vw;
    color: rgb(126, 126, 126);
}
</style>
