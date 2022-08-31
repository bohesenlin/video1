<template>
    <div class="home">
        <div class="video_player">
            <iframe
                id="iframe"
                src=""
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
            >
            </iframe>
        </div>
        <h3>{{ data_query.title }}</h3>
        <div style="margin:6px">正在播放第{{ index1 + 1 }}集</div>
        <div class="nav_interface">
            <div class="nav_left">更换接口</div>
            <div class="nav_list">
                <div
                    :class="
                        isActive == index ? 'list_item active_list' : 'list_item'
                    "
                    v-for="(item, index) in jx1"
                    :key="index"
                    @click="select_interface(index)"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
        <button style="margin:6px" @click="click1" v-show="path.indexOf('mangguo') != -1">加载下一页</button>
        <div class="tbody">
            <div class="show_list">
                <a
                    style="white-space: nowrap"
                    v-for="(item, index) in list"
                    :key="index"
                    @click="click(index, $event)"
                    :class="index == index1 ? 'active' : ''"
                >
                    <div class="link">{{ index + 1 }}</div>
                </a>
            </div>
        </div>
        <div style="margin:6px">无法观看？换个接口试试吧</div>
        <div class="cupfox">
            <a v-for="(item, index) in cupfox_list" :key="index" @click="cupfox_click(item)">
                <div class="title">{{item.title}}</div>
                <div class="text">
                    <div class="platform">
                        <img :src="item.imgUrl">
                        <div class="platform_name">{{item.platform}}</div>
                    </div>
                    <div class="recommend">{{item.recommend}}</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YoukuVideoView',
    components: {},
    data() {
        return {
            list: [],
            src: '',
            index1: 0,
            option: '',
            jx1: [],
            data_query: {},
            watch_id: 0,
            path:'',
            page:1,
            total_page:1,
            isActive:0,
            cupfox_list:{}
        }
    },

    created() {
        this.get_interface()

        // // 获取观看记录
        // this.data_query = JSON.parse(this.$route.query.item)
        // if (this.data_query.watch_id == undefined) {
        //     this.$api.db
        //         .find({
        //             collection: 'tengxun',
        //             query:{albumId: this.data_query.url}
        //         })
        //         .then((res) => {
        //             console.log(res)
        //             if (res.data.length !== 0) {
        //                 this.watch_id = res.data[0].watch_id
        //                 this.index1 = this.watch_id - 1
        //             }else{
        //                 this.watch_id = 1
        //                 this.index1 = this.watch_id - 1
        //             }
        //         })
        // } else {
        //     this.watch_id = this.data_query.watch_id
        //     this.index1 = this.watch_id - 1
        // }
    },

    mounted() {
        this.path = /\/(.*?)video/.exec(this.$route.path)[1]
        this.data_query = JSON.parse(this.$route.query.item)
        this.http_getList()
        this.cupfox()
    },
    methods: {
        async get_interface(){
            // 获取解析接口
            let res1 = await this.$api.db
                .getInterface({collection: 'interface',query: { _id: 'interface' }})
            this.jx1 = res1.data.interface
            // 获取默认解析接口
            // let res2 = await this.$api.db
            //     .find({collection: 'interface',query: { _id: 'defaultinterface' },})
            this.option = 'https://vip.parwix.com:4433/player/?url='
            this.jx1.forEach((item,index)=>{
                if(item.url ==this.option){this.isActive = index}
            })
        },
        async cupfox(){
            let ret1 = await this.$api.cupfox
                .cupfox({name: this.data_query.title})
            this.cupfox_list = ret1.data
            console.log(this.cupfox_list)
        },
        cupfox_click(item){
            this.cupfox_local_Storage(item)
            this.$router.push({path:'/cupfoxview',query:{href:item.href}})
        },
        select_interface(index){
            this.isActive = index
            this.option = this.jx1[index].url
        },
        play(watch_id) {
            this.openIframe(this.option + this.list[watch_id - 1].href)
        },
        updata(collection) {
            
            this.$api.db
                .update({
                    collection,
                    data: this.data_query,
                    albumId: this.data_query.href,
                })
                .then((res) => {
                    console.log(res)
                })
        },

        click(index, event) {
            this.data_query.watch_id = index + 1
            this.data_query.watch_time = Date.now()
            console.log(event)
            
            this.local_Storage(this.path)
            this.updata(this.path)
            this.index1 = index
            if (this.list.length === 0) {
                return null
            }
            if (this.path.indexOf('fantuantv') != -1){
                this.$api.fantuantv.fantuantvplay({ url: this.list[index].href }).then((res) => {
                // console.log(res)
                this.openIframe(res.data)
            })
            }else{
                console.log("解析地址",this.option + this.list[index].href)
                this.openIframe(this.option + this.list[index].href)
            }
            
            if (event != undefined) {
                event.currentTarget.className = 'active'
            }
        },
        // 芒果TV
        click1() {
            if (this.page < this.total_page) {this.page++} else {return null}
            this.$api.mangguo
                .mangguo({playPartId: this.data_query.playPartId,page: this.page,})
                .then((res) => {this.list.push(...res.data.data)})
        },

        http_getList() {
            if (this.path.indexOf('tengxun') != -1) {
                this.$api.tengxun.tengxun({ url: this.data_query.href }).then((res) => {
                    this.list = res.data
                })
            } else if (this.path.indexOf('aiqiyi') != -1) {
                this.$api.aiqiyi
                    .aiqiyi({ id: this.data_query.albumId })
                    .then((res) => {
                        this.list = res.data
                    })
            } else if (this.path.indexOf('youku') != -1) {
                this.$api.youku
                    .youku({ showIds: this.data_query.showId })
                    .then((res) => {
                        this.list = res.data
                    })
            }else if (this.path.indexOf('mangguo') != -1) {
                if(this.data_query.playPartId == 0){this.openIframe(this.data_query.href);return}
                this.$api.mangguo
                    .mangguo({playPartId: this.data_query.playPartId,page: this.page,})
                    .then((res) => {
                        this.total_page = res.data.total_page //总共集数
                        this.list.push(...res.data.data)
                    })
            }else if (this.path.indexOf('fantuantv') != -1) {
                this.$api.fantuantv
                    .fantuantv({ url: this.data_query.href })
                    .then((res) => {
                        this.list = res.data.data
                        for (var val in this.list) {
                            this.isShow = val
                            break
                        }
                    })
            }
        },

        local_Storage(item_name) {
            var obj = JSON.parse(localStorage.getItem('data_list')) || {}
            this.data_query['platform'] = item_name
            obj[this.data_query.href] = this.data_query
            localStorage.setItem('data_list', JSON.stringify(obj))
        },
        cupfox_local_Storage(item_name) {
            var obj = JSON.parse(localStorage.getItem('data_list')) || {}
            item_name['watch_time'] = Date.now()
            obj[item_name.href] = item_name
            localStorage.setItem('data_list', JSON.stringify(obj))
        },

        openIframe(url) {
            var oldIframe = document.getElementById('iframe')
            var iframe = document.createElement('iframe')
            iframe.setAttribute('id', 'iframe')
            iframe.setAttribute('scrolling', 'no')
            iframe.setAttribute('border', '0')
            iframe.setAttribute('frameborder', 'no')
            iframe.setAttribute('framespacing', '0')
            iframe.setAttribute('allowfullscreen', 'true')
            iframe.src = url
            oldIframe.parentNode.insertBefore(iframe, oldIframe)
            oldIframe.parentNode.removeChild(oldIframe)
        },
    },
}
</script>

<style scoped>
@import './手机播放.css';

</style>
