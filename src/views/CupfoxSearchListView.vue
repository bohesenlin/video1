<template>
    <div class="cupfox_search">
        <a
            v-for="(item, index) in listdata"
            :key="index"
            @click="cupfox_click(item.href)"
        >
            <div class="title">{{ item.title }}</div>
            <div class="text">
                <div class="platform">
                    <img :src="item.platform_img" />
                    <div class="platform_name">{{ item.platform }}</div>
                </div>
                <div class="recommend"  v-show="item.recommend!=''">{{ item.recommend }}</div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listdata: {}, //所有列表
            path: '', //路由地址
            query: {},
            name: '', //影片名称
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
            if (this.path.indexOf('cupfox') != -1) {
                this.$api.cupfox.cupfox({ name: this.name }).then((res) => {
                    this.listdata = res.data
                })
            }
        },
        cupfox_click(href) {
            this.$router.push({ path: '/cupfoxview', query: { href: href } })
        },
    },

    watch: {
        '$route.query.name'() {
            this.name = this.$route.query.name
            // 判断是否在搜索界面
            if (this.name == '' || this.name == undefined) {
                return null
            }
        },
    },
}
</script>

<style scoped>
.cupfox_search {
    width: 100vw;
    padding: 0 1.33333333vw 0;
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
