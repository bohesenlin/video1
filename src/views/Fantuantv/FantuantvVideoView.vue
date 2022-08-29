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
            <div class="nav_list">
                <div
                    :class="
                        isShow == index ? 'list_item active_list' : 'list_item'
                    "
                    v-for="(item, index) in list"
                    :key="index"
                    @click="showList(index)"
                >
                    {{ index }}
                </div>
            </div>
        </div>
        <div class="tbody">
            <div
                v-for="(item, index) in list"
                :key="index"
                v-show="isShow == index"
            >
                <!-- <div>{{ src }}</div> -->
                <div class="show_list">
                    <a
                        style="white-space: nowrap"
                        v-for="(item, index) in item"
                        :key="index"
                        @click="click(index, item.href, $event)"
                        :class="index == index1 ? 'active' : ''"
                    >
                        <div class="link">{{ index + 1 }}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FantuantvVideoView',
    components: {},
    data() {
        return {
            list: [],
            // nav_list:[],
            src: '',
            index1: 0,
            data_query: {},
            watch_id: 0,
            isShow: '',
            path:''
        }
    },

    mounted() {
        this.path = /\/(.*?)video/.exec(this.$route.path)[1]
        this.data_query = JSON.parse(this.$route.query.item)
        this.$api.fantuantv
            .fantuantv({ url: this.data_query.href })
            .then((res) => {
                this.list = res.data.data
                for (var val in this.list) {
                    this.isShow = val
                    break
                }
            })
    },
    methods: {
        showList(index) {
            this.isShow = index
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

        click(index, href, event) {
            this.data_query.watch_id = index + 1
            this.data_query.watch_time = Date.now()
            
            this.local_Storage(this.path)
            this.updata(this.path)
            this.index1 = index
            if (this.list.length === 0) {
                return null
            }
            this.$api.fantuantv.fantuantvplay({ url: href }).then((res) => {
                this.openIframe(res.data)
            })

            if (event != undefined) {event.currentTarget.className = 'active'}
        },

        local_Storage(item_name) {
            var obj = JSON.parse(localStorage.getItem('data_list')) || {}
            this.data_query['platform'] = item_name
            obj[this.data_query.href] = this.data_query
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
