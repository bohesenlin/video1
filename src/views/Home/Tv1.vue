<template>
    <div>
        <List :list-data="listData"/>
    </div>
</template>

<script>
import List from '../../components/Index.vue'
export default {
    components: {
        List,
    },

    data() {
        return {
            listData:{},
            // query:{},
        }
    },
    created() {
        // 加载第一页数据
        // this.query = this.$route.query
        this.$api.api.main().then((res) => {
            // console.log(res.data.data.categoryVideos)
            this.listData = res.data.data.data[0].sourceData
            delete this.listData.color
            delete this.listData.focus
            delete this.listData.tonglanTitleMap
            console.log(this.listData)
        })
    },
}
</script>

<style></style>
