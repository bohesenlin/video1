<template>
    <div class="m-home">
        <h3>观看记录</h3>
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
                            <img :src="item.imgUrl" />
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
export default {
    data() {
        return {
            data_list: [],
            pic: {
                tengxun:
                    'https://p0.meituan.net/dpgroup/22f08cedbac628d9e698553af24002114681.png',
                youku: 'https://p0.meituan.net/dpgroup/22f08cedbac628d9e698553af24002114681.png',
                aiqiyi: 'https://p0.meituan.net/dpgroup/22f08cedbac628d9e698553af24002114681.png',
                mangguo:
                    'https://p0.meituan.net/dpgroup/22f08cedbac628d9e698553af24002114681.png',
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
                    data_list[val].platform == 'tengxun' ||
                    data_list[val].platform == 'mangguo' ||
                    data_list[val].platform == 'aiqiyi' ||
                    data_list[val].platform == 'youku'
                ) {
                    data_list[val].imgUrl = this.pic[data_list[val].platform]
                }
                Arr_list.push(data_list[val])
            }
            Arr_list.sort(this.sortArr)
            this.data_list = Arr_list
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
.cupfox {
    height: 20vh;
    width: 360px;
    padding: 10px;
}
.cupfox a {
    display: flex;
    justify-content: space-between;
}
.cupfox a .title {
    height: 20px;
    width: 100%;
    color: #dd5325;
    font-size: 18px;
    margin: 10px 0 10px 0;
}
.cupfox a .text {
    height: 30px;
    width: 100%;
    display: flex;
}
.cupfox a .text .platform {
    display: flex;
}
.cupfox a .text .platform img {
    height: 22px;
    width: 22px;
    border-radius: 10px;
    border: 2px solid#9fd4fd;
}
.cupfox a .text .platform .platform_name {
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
.cupfox a .text .recommend {
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
.cupfox a .del {
    padding-top: 20px;
    height: 20px;
}
.cupfox a .del img {
    height: 20px;
    width: 20px;
}

.m-home {
    padding: 1vw 1.33333333vw 0;
    height: 95vh;
    overflow-y: scroll;
}
</style>
