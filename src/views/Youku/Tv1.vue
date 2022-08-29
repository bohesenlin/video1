<template>
    <div>
        <List :list-data="listData"/>
    </div>
</template>

<script>
import List from '../../components/YoukuIndex.vue'
export default {
    components: {
        List,
    },

    data() {
        return {
            listData:[],
            // query:{},
        }
    },
    created() {
        // 加载第一页数据
        // this.query = this.$route.query
        this.$api.youku.main().then((res) => {
            // console.log(res.data.data.categoryVideos)
            this.listData = res.data.moduleList
            console.log(this.listData)
        })
    },
}
</script>

<style></style>
