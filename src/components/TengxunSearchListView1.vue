<template>
    <div class="cupfox_search">
        <a
            v-for="(item, index) in listdata"
            :key="index"
            @click="click(item)"
        >
            <div class="title">{{ item.title }}</div>
            <div class="text">
                <div class="platform">
                    <img :src="item.imgUrl" />
                    <div class="platform_name">{{ item.platform }}</div>
                </div>
                <div class="recommend">{{ item.figure_caption }}</div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listdata: [], //所有列表
            path: '', //路由地址
            query: {},
            name: '', //影片名称
            pic: {
                tengxun:
                    'https://p0.meituan.net/dpgroup/22f08cedbac628d9e698553af24002114681.png',
                youku: require('../assets/img/优酷.png'),
                aiqiyi: require('../assets/img/爱奇艺.png'),
                mangguo: require('../assets/img/芒果TV-01.png'),
            },
        }
    },

    created() {
        //记录当前路由query参数
        this.path = this.$route.path
        this.name = this.$route.query.name
        if (this.name == '') return
        // 获取第一页
        this.http_request()
    },
    methods: {
        http_request() {
            this.$api.tengxun
                .tengxunsearch({ name: this.name, pagenum: 1 })
                .then((res) => {
                    if (res.data.length > 5) {
                        res.data.length = 5
                    }
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i]['platform'] = 'tengxun'
                        res.data[i]['imgUrl'] = this.pic['tengxun']
                    }
                    this.listdata.push(...res.data)
                })
            this.$api.aiqiyi
                .aiqiyisearch({ name: this.name, pagenum: 1 })
                .then((res) => {
                    if (res.data.length > 5) {
                        res.data.length = 5
                    }
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i]['platform'] = 'aiqiyi'
                        res.data[i]['imgUrl'] = this.pic['aiqiyi']
                    }
                    this.listdata.push(...res.data)
                })
            this.$api.youku
                .youkusearch({ name: this.name, pagenum: 1 })
                .then((res) => {
                    if (res.data.length > 5) {
                        res.data.length = 5
                    }
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i]['platform'] = 'youku'
                        res.data[i]['imgUrl'] = this.pic['youku']
                    }
                    this.listdata.push(...res.data)
                })
            this.$api.mangguo
                .mangguosearch({ name: this.name, pagenum: 1 })
                .then((res) => {
                    if (res.data.length > 5) {
                        res.data.length = 5
                    }
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i]['platform'] = 'mangguo'
                        res.data[i]['imgUrl'] = this.pic['mangguo']
                    }
                    this.listdata.push(...res.data)
                })
        },
        click(item) {
            console.log(item)
            if (
                item.platform == 'tengxun' ||
                item.platform == 'mangguo' ||
                item.platform == 'aiqiyi' ||
                item.platform == 'youku'
            ) {
                this.$router.push({
                    path: `/${item.platform}videoview`,
                    query: { item: JSON.stringify(item) },
                })
            } else {
                this.$router.push({
                    path: '/cupfoxview',
                    query: { href: item.href },
                })
            }
        },
    },

    // watch: {
    //     '$route.query.name'() {
    //         this.name = this.$route.query.name
    //         // 判断是否在搜索界面
    //         if (this.name == '' || this.name == undefined) {
    //             return null
    //         }
    //         this.$api.tengxun.tengxunsearch({ name: this.name }).then((res) => {
    //             this.listdata = res.data
    //         })
    //     },
    // },
}
</script>

<style scoped>
.cupfox_search {
    width: 100vw;
    padding: 0 1.33333333vw 0;
    margin-top: 10.6vw;
    height: 90vh;
    overflow-y: scroll;
}
.cupfox_search a .title {
    height: 20px;
    width: 100%;
    color: #dd5325;
    font-size: 18px;
    margin: 10px 0 10px 0;
}
.cupfox_search a .text {
    height: 30px;
    width: 100%;
    display: flex;
}
.cupfox_search a .text .platform {
    display: flex;
}
.cupfox_search a .text .platform img {
    height: 22px;
    width: 22px;
    border-radius: 10px;
    border: 2px solid#9fd4fd;
}
.cupfox_search a .text .platform .platform_name {
    padding: 5px;
    height: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: rgba(32, 108, 207, 0.1);
    text-align: center;
    line-height: 10px;
    color: rgba(32, 108, 207, 1);
    font-size: 12px;
    margin-left: -4px;
}
.cupfox_search a .text .recommend {
    padding: 5px;
    margin-left: 5px;
    height: 20px;
    border-radius: 10px;
    background: rgba(32, 108, 207, 0.1);
    text-align: center;
    line-height: 10px;
    font-size: 12px;
    color: rgba(203, 30, 131, 0.9);
}
</style>
