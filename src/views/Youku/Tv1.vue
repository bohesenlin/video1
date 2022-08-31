<template>
    <div>
        <List :list-data="listData" />
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
            listData: [],
        }
    },
    created() {
        // 加载第一页数据
        this.$api.youku.main().then((res) => {
            var abc = res.data.moduleList
            abc.length = 5
            abc.splice(1,1)
            this.listData = abc
            console.log(this.listData)
        })
    },
}
</script>

<style></style>
