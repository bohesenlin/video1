<template>
    <div class="m-home1">
        <div class="video-list active">
            <router-link
                :to="{ path: '/' + path.split('/')[2].split('search')[0] + 'videoview', query: { item: JSON.stringify(item) } }"
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
        }
    },

    created() {
        //记录当前路由query参数
        this.path = this.$route.path
        this.name = this.$route.query.name
        if (this.name == '')return
        // 获取第一页
        this.http_request()
    },
    methods:{
        
        http_request() {
            if (this.path.indexOf('tengxun') != -1) {
                this.$api.tengxun
                    .tengxunsearch({ name: this.name, pagenum: 1 })
                    .then((res) => {this.listdata = res.data})
            } else if (this.path.indexOf('aiqiyi') != -1) {
                this.$api.aiqiyi
                    .aiqiyisearch({ name: this.name, pagenum: 1 })
                    .then((res) => {this.listdata = res.data})
            }else if (this.path.indexOf('youku') != -1) {
                this.$api.youku
                    .youkusearch({ name: this.name, pagenum: 1 })
                    .then((res) => {this.listdata = res.data})
            }else if (this.path.indexOf('mangguo') != -1) {
                this.$api.mangguo
                    .mangguosearch({ name: this.name, pagenum: 1 })
                    .then((res) => {this.listdata = res.data})
            }else if (this.path.indexOf('fantuantv') != -1) {
                this.$api.fantuantv
                    .fantuantvsearch({ name: this.name, pagenum: 1 })
                    .then((res) => {this.listdata = res.data})
            }
        },
        // async http_request1() {
        //     let res = []
        //     let res1 = await this.$api.tengxun.tengxunsearch({ name: this.name, pagenum: 1 })
        //     let res2 = await this.$api.aiqiyi.aiqiyisearch({ name: this.name, pagenum: 1 })
        //     let res3 = await this.$api.youku.youkusearch({ name: this.name, pagenum: 1 })
        //     let res4 = await this.$api.mangguo.mangguosearch({ name: this.name, pagenum: 1 })
        //     let res5 = await this.$api.fantuantv.fantuantvsearch({ name: this.name, pagenum: 1 })
        //     res.push(...res1.data)
        //     res.push(...res2.data)
        //     res.push(...res3.data)
        //     res.push(...res4.data)
        //     res.push(...res5.data)
        //     console.log(res)
        //     var list = {}
        //     for(var i=0;i<res.length;i++){
        //         list[res[i].title]=res[i]
        //     }
        //     console.log(list)
        //     this.listdata = res
        // },
    },

    watch: {
        '$route.query.name'() {
            this.name = this.$route.query.name
            // 判断是否在搜索界面
            if (this.name == '' || this.name == undefined) {
                return null
            }
            this.$api.tengxun.tengxunsearch({ name: this.name }).then((res) => {
                this.listdata = res.data
            })
        },
    },
}
</script>

<style scoped>
@import './SearchList.css';
</style>
