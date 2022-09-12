<template>
    <div class="record">
        <Topnav />
        <div class="nav">
            <h3>观看记录</h3>
            <div class="all" @click="click_delAll()">
                <div>删除全部</div>
                <img src="../assets/img/删除.png" />
            </div>
        </div>
        <div class="cupfox">
            <a
                v-for="(item, index) in data_list"
                :key="index"
                @click="click(item)"
            >
                <div class="left">
                    <div class="title">{{ item.title }}</div>
                    <div class="text">
                        <div class="platform">
                            <img :src="item.platform_img" />
                            <div class="platform_name">{{ item.platform }}</div>
                        </div>
                    </div>
                </div>
                <div class="del" @click.stop="del(item)">
                    <img src="../assets/img/删除.png" />
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import Topnav from '../components/Topnav'
export default {
    components: {
        Topnav,
    },
    data() {
        return {
            data_list: [],
            pic: {
                '腾讯视频':
                    'https://p0.meituan.net/dpgroup/22f08cedbac628d9e698553af24002114681.png',
                '优酷': require('../assets/img/优酷.png'),
                '爱奇艺': require('../assets/img/爱奇艺.png'),
                '芒果TV': require('../assets/img/芒果TV-01.png'),
            },
        }
    },
    created() {
        this.int()
    },

    methods: {
        int() {
            let data_list = JSON.parse(localStorage.getItem('data_list'))
            var Arr_list = []
            for (var val in data_list) {
                if (
                    data_list[val].platform == '腾讯视频' ||
                    data_list[val].platform == '芒果TV' ||
                    data_list[val].platform == '爱奇艺' ||
                    data_list[val].platform == '优酷'
                ) {
                    data_list[val]['platform_img'] = this.pic[data_list[val].platform]
                }
                Arr_list.push(data_list[val])
            }
            Arr_list.sort(this.sortArr)
            this.data_list = Arr_list
            console.log(this.data_list)
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
            } else {
                this.$router.push({
                    path: '/cupfoxview',
                    query: { href: item.href },
                })
            }
        },
        click_delAll() {
            localStorage.setItem('data_list', JSON.stringify({}))
            this.int()
        },
        del(item) {
            var obj = JSON.parse(localStorage.getItem('data_list'))
            delete obj[item.href]
            localStorage.setItem('data_list', JSON.stringify(obj))
            this.int()
        },
        // 排序
        sortArr(a, b) {
            return b.watch_time - a.watch_time
        },
    },
}
</script>

<style scoped>
.record .cupfox {
    height: 20vh;
    width: 360px;
    padding: 10px;
}
.record .cupfox a {
    display: flex;
    justify-content: space-between;
}
.record .cupfox a .title {
    height: 20px;
    width: 100%;
    color: #dd5325;
    font-size: 18px;
    margin: 10px 0 10px 0;
}
.record .cupfox a .text {
    height: 30px;
    width: 100%;
    display: flex;
}
.record .cupfox a .text .platform {
    display: flex;
}
.record .cupfox a .text .platform img {
    height: 22px;
    width: 22px;
    border-radius: 10px;
    border: 2px solid#9fd4fd;
}
.record .cupfox a .text .platform .platform_name {
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
.record .cupfox a .text .recommend {
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
.record .cupfox a .del {
    padding-top: 20px;
    height: 20px;
}
.record .cupfox a .del img {
    height: 20px;
    width: 20px;
}

.record {
    padding: 1vw 1.33333333vw 0;
    height: 95vh;
    overflow-y: scroll;
}
.record .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.record .nav .all{
    display: flex;
    align-items: center;
    margin-right: 2vw;
}
.record .nav img{
    width: 20px;
    height: 20px;
}
</style>
